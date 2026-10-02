const fs = require('fs');
const path = require('path');

const base = 'src/features/destino1000/content/questions';
['humanas', 'linguagens', 'matematica', 'natureza'].forEach(area => {
  const dir = path.join(base, area);
  if (!fs.existsSync(dir)) return;
  console.log(`\n=== ${area.toUpperCase()} ===`);
  fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    // Match question ID objects
    const matches = content.match(/id:\s*['"](MAT|NAT|HUM|LIN)-[A-Z0-9_-]+['"]/g) || [];
    console.log(`  ${f}: ${matches.length}`);
  });
});
