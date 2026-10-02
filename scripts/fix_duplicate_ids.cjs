const fs = require('fs');

// 1. eletroquimica
const eqPath = 'src/features/destino1000/content/questions/natureza/eletroquimica.js';
let eqContent = fs.readFileSync(eqPath, 'utf8');
eqContent = eqContent.replace(/["']NAT-ELET-(\d+)["']/g, '"NAT-ELETROQ-$1"');
fs.writeFileSync(eqPath, eqContent);

// 2. geopolitica
const gpPath = 'src/features/destino1000/content/questions/humanas/geopolitica.js';
let gpContent = fs.readFileSync(gpPath, 'utf8');
gpContent = gpContent.replace(/["']HUM-GEO-(\d+)["']/g, '"HUM-GEOPOL-$1"');
fs.writeFileSync(gpPath, gpContent);

// 3. meio-ambiente
const maPath = 'src/features/destino1000/content/questions/humanas/meio-ambiente.js';
let maContent = fs.readFileSync(maPath, 'utf8');
maContent = maContent.replace(/["']HUM-GEO-(\d+)["']/g, '"HUM-AMB-$1"');
fs.writeFileSync(maPath, maContent);

console.log('Fixed duplicate IDs successfully');
