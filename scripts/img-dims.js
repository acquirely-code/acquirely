// Regenerates lib/img-dims.json: the width/height of every image the landing pages use.
// Run `npm run img-dims` after adding or replacing images in these folders.
const fs = require("fs");
const path = require("path");
const m = require("next/dist/compiled/image-size");
const sizeOf = m.imageSize || m.default || m;

const DIRS = ["ecommerce/img", "publishers/img"];
const pub = path.join(__dirname, "..", "public");
const out = {};

for (const dir of DIRS) {
  for (const file of fs.readdirSync(path.join(pub, dir)).sort()) {
    if (!/\.(jpe?g|png|webp|gif|svg)$/i.test(file)) continue;
    try {
      const { width, height } = sizeOf(path.join(pub, dir, file));
      if (width && height) out[`/${dir}/${file}`] = [width, height];
    } catch {}
  }
}

fs.writeFileSync(path.join(__dirname, "..", "lib", "img-dims.json"), JSON.stringify(out, null, 0).replace(/\],/g, "],\n") + "\n");
console.log(`img-dims: ${Object.keys(out).length} images`);
