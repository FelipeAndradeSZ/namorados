const fs = require('fs');

const theoryFile = fs.readFileSync('src/features/destino1000/content/theoryData.js', 'utf8');
const registryFile = fs.readFileSync('src/features/destino1000/content/registry.js', 'utf8');

const regModules = [...registryFile.matchAll(/"([a-z0-9\/-]+)":\s*\(\)/g)].map(m => m[1]);
const theoryModules = [...theoryFile.matchAll(/"([a-z0-9\/-]+)":\s*\{/g)].map(m => m[1]);

const missing = regModules.filter(m => !theoryModules.includes(m));
console.log('Total modules in registry:', regModules.length);
console.log('Total modules in theory:', theoryModules.length);
console.log('Missing theory for:', missing);
