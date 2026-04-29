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
const outDir = path.join(root, 'public', 'background');

/** Prefer full-res repo JPEG; then optional override; then re-encode from shipped hero.jpg. */
const SOURCE_CANDIDATES = [
  path.join(root, 'src', 'assets', 'background', 'seattle_sunset.jpg'),
  path.join(root, 'src', 'assets', 'background', 'hero-source.jpg'),
  path.join(root, 'public', 'background', 'hero.jpg'),
];

const MAX_WIDTH = 1920;

function resolveSourcePath() {
  return SOURCE_CANDIDATES.find((p) => fs.existsSync(p));
}

async function main() {
  const src = resolveSourcePath();
  if (!src) {
    console.error(
      'No hero source image. Expected src/assets/background/seattle_sunset.jpg (or hero-source.jpg), or public/background/hero.jpg.',
    );
    process.exit(1);
  }
  fs.mkdirSync(outDir, { recursive: true });

  const input = await sharp(src).toBuffer();
  const pipeline = sharp(input).resize(MAX_WIDTH, null, {
    withoutEnlargement: true,
    fit: 'inside',
  });

  await pipeline.clone().webp({ quality: 82 }).toFile(path.join(outDir, 'hero.webp'));

  const jpgOut = path.join(outDir, 'hero.jpg');
  const jpgTmp = path.join(outDir, 'hero.jpg.tmp');
  await pipeline.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(jpgTmp);
  fs.renameSync(jpgTmp, jpgOut);

  console.log('Wrote', path.join(outDir, 'hero.webp'));
  console.log('Wrote', jpgOut);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
