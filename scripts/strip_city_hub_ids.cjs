const fs = require('fs');
const path = require('path');

const qDir = path.join(__dirname, '..', 'src', 'features', 'destino1000', 'content', 'questions');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      processDir(full);
    } else if (f.endsWith('.js')) {
      let content = fs.readFileSync(full, 'utf8');
      const original = content;
      // Remove cityId and hubId lines
      content = content.replace(/\s*["']?cityId["']?\s*:\s*["'][^"']*["'],?/g, '');
      content = content.replace(/\s*["']?hubId["']?\s*:\s*["'][^"']*["'],?/g, '');
      content = content.replace(/\s*["']?locationId["']?\s*:\s*["'][^"']*["'],?/g, '');
      if (content !== original) {
        fs.writeFileSync(full, content, 'utf8');
        console.log(`Cleaned vestigial tags in: ${f}`);
      }
    }
  }
}

processDir(qDir);
console.log('Finished stripping all vestigial city/hub/location fields.');
