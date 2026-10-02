const fs = require('fs');
const path = require('path');

const qDir = path.join(__dirname, '..', 'src', 'features', 'destino1000', 'content', 'questions');
let totalQuestions = 0;
let fileCount = 0;
const ids = new Set();
const duplicates = [];
const areaCounts = {};
const skillCounts = {};
const difficultyCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const missingFields = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (f.endsWith('.js')) {
      fileCount++;
      const area = path.basename(path.dirname(full));
      areaCounts[area] = areaCounts[area] || 0;
      
      try {
        // Read file and parse objects
        const content = fs.readFileSync(full, 'utf8');
        // Extract array export
        const exportMatch = content.match(/export\s+const\s+(\w+)\s*=\s*(\[[\s\S]*\]);?/);
        if (exportMatch) {
          // evaluate safely via Function
          const questions = new Function(`return ${exportMatch[2]}`)();
          questions.forEach((q, idx) => {
            if (!q.id) {
              missingFields.push({ file: f, index: idx, issue: 'missing id' });
              return;
            }
            if (ids.has(q.id)) {
              duplicates.push(q.id);
            } else {
              ids.add(q.id);
            }
            totalQuestions++;
            areaCounts[q.area || area] = (areaCounts[q.area || area] || 0) + 1;
            
            const diff = q.difficulty || 3;
            difficultyCounts[diff] = (difficultyCounts[diff] || 0) + 1;
            
            const skillKey = `${q.area}_H${q.skill}`;
            skillCounts[skillKey] = (skillCounts[skillKey] || 0) + 1;
            
            // Validate question schema
            if (!q.prompt) missingFields.push({ id: q.id, issue: 'missing prompt' });
            if (!q.options || q.options.length !== 5) missingFields.push({ id: q.id, issue: `options count is ${q.options ? q.options.length : 0}` });
            if (!q.options || !q.options.some(o => o.isCorrect)) missingFields.push({ id: q.id, issue: 'no correct option' });
            if (!q.detailedExplanation || !q.detailedExplanation.summary) missingFields.push({ id: q.id, issue: 'missing explanation summary' });
          });
        }
      } catch (err) {
        missingFields.push({ file: f, error: err.message });
      }
    }
  }
}

scanDir(qDir);
console.log(JSON.stringify({
  fileCount,
  totalQuestions,
  duplicateCount: duplicates.length,
  duplicates,
  areaCounts,
  difficultyCounts,
  uniqueSkillsCount: Object.keys(skillCounts).length,
  missingFieldsCount: missingFields.length,
  sampleMissingFields: missingFields.slice(0, 10)
}, null, 2));
