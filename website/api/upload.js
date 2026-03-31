import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

// Disable Vercel's default body parser so we can read raw binary
export const config = {
  api: {
    bodyParser: false,
  },
};

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-team-id, x-filename');
}

// Read raw body from request stream
function readBody(req, maxBytes) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let totalSize = 0;

    req.on('data', (chunk) => {
      totalSize += chunk.length;
      if (totalSize > maxBytes) {
        reject(new Error(`File too large. Maximum size is ${Math.round(maxBytes / 1024 / 1024)} MB`));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.R2_ACCOUNT_ID || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
    console.error('Missing R2 environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const teamId = req.headers['x-team-id'] || 'unknown';
    const safeTeamId = teamId.replace('#', '');

    // Read the raw file body (limit 5 MB for Vercel serverless)
    const maxSize = 5 * 1024 * 1024;
    const fileBuffer = await readBody(req, maxSize);

    if (fileBuffer.length === 0) {
      return res.status(400).json({ error: 'No file data received' });
    }

    const uuid = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2) + Date.now().toString(36);

    const key = `${safeTeamId}/draft_${uuid}.pdf`;

    await r2.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: 'application/pdf',
    }));

    const publicUrl = `${process.env.R2_PUBLIC_URL.replace(/\/$/, '')}/${key}`;

    res.status(200).json({ url: publicUrl, key });
  } catch (error) {
    console.error('Upload proxy error:', error);
    const status = error.message.includes('too large') ? 413 : 500;
    res.status(status).json({ error: error.message || 'Upload failed' });
  }
}
