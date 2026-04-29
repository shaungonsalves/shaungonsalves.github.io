/**
 * One-shot hero background optimization for Lighthouse (max width 1920px).
 * Run: node scripts/optimize-hero.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'src', 'assets', 'background', 'seattle_sunset.jpg');
const outDir = path.join(root, 'public', 'background');

const MAX_WIDTH = 1920;

async function main() {
  if (!fs.existsSync(src)) {
    console.error('Missing source image:', src);
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });

  const pipeline = sharp(src).resize(MAX_WIDTH, null, {
    withoutEnlargement: true,
    fit: 'inside',
  });

  await pipeline.clone().webp({ quality: 82 }).toFile(path.join(outDir, 'hero.webp'));

  await pipeline.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(outDir, 'hero.jpg'));

  console.log('Wrote', path.join(outDir, 'hero.webp'));
  console.log('Wrote', path.join(outDir, 'hero.jpg'));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
