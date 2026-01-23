const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'years-content-complete.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define semester assignments for each module based on HTML analysis
const moduleSemesters = {
  // 1ère année - Semestres 1-2
  "anatomie-1": 1,
  "chimie et biochimie": 1,
  "biologie": 1,
  "sante-public-1": 1,
  "meth-d-app---amp--termino": 1,
  "langue--amp--com": 1,
  "biophysique": 2,
  "histoire-de--la-medecine--amp---psychologie": 2,
  "anatomie-2": 2,
  "histologie-generale": 2,
  "tec": 2,

  // 2ème année - Semestres 3-4
  "anatomie-3": 3,
  "semiologie-1": 3,
  "physiologie-1": 3,
  "histo-embryo-speciale": 3,
  "med-exp": 3,
  "micro-immuno": 3,
  "anatomie-4": 4,
  "biochimie-clinique": 4,
  "physiologie-2": 4,
  "hematologie--fondamentale": 4,
  "semiologie-2": 4,

  // 3ème année - Semestres 5-6
  "parasitologie": 5,
  "pathologies-infectieuses": 5,
  "pharmacologie": 5,
  "radiologie": 5,
  "apg": 5,
  "pathologies-respiratoires": 6,
  "pathologies-digestives": 6,
  "pathologies-cardio-vasculaires": 6,

  // 4ème année - Semestres 7-8
  "endocrino--amp--dermato": 7,
  "dermato-2014-2018": 7,
  "onco-hematologie": 7,
  "pathologie-du-systeme-nerveux": 7,
  "app-locomoteur": 8,
  "genetique": 8,
  "pediatrie": 8,
  "anatomie-pathologie-ii-et-iii": 8,

  // 5ème année - Semestres 9-10
  "sant--publique-ii": 9,
  "synth-se-th-rptq": 9,
  "urg-r-a": 9,
  "psychiatrie": 9,
  "med-l-gale---med-travail": 10,
  "gyn-co-obst-triq": 10,
  "orl": 10,
  "ophtalmo": 10,
  "uro-n-phro": 10,

  // Internat - No semesters (undefined or 0)
  "internat-anatomie": undefined,
  "internat-biologie": undefined,
  "internat-pathologies-medicales": undefined,
  "internat-pathologie-chirurgicales": undefined,
  "internat-urgences-medicales": undefined,
  "internat-urgences-chirurgicales": undefined,
  "internat-netter-atlas": undefined,
  "internat-grays-anatomie": undefined,
};

// Track stats
let modifiedCount = 0;
let skippedCount = 0;

// Process each module
for (const moduleId in moduleSemesters) {
  const semester = moduleSemesters[moduleId];

  // Create the pattern to match: id: "moduleId"
  // Need to escape special characters in the module ID
  const escapedId = moduleId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(id:\\s*"${escapedId}"\\s*,)`, 'g');

  // Count matches before
  const beforeCount = (content.match(pattern) || []).length;

  // Replace to add semester property after the id
  if (semester !== undefined) {
    content = content.replace(pattern, `$1\n        semester: ${semester},`);
    modifiedCount += beforeCount;
    console.log(`✓ Added semester ${semester} to module "${moduleId}" (${beforeCount} occurrence(s))`);
  } else {
    skippedCount += beforeCount;
    console.log(`- Skipped module "${moduleId}" (${beforeCount} occurrence(s))`);
  }
}

console.log(`\nSummary:`);
console.log(`  Modified: ${modifiedCount} modules`);
console.log(`  Skipped: ${skippedCount} modules`);

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('\n✓ Successfully updated years-content-complete.ts');
