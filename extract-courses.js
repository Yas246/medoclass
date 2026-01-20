const fs = require('fs');
const path = require('path');

// Configuration
const BASE_DIR = path.join(__dirname, '../..');
const HTML_FILES_DIR = BASE_DIR; // Dossier contenant les fichiers HTML
const OUTPUT_FILE = path.join(__dirname, '../lib/data/years-content-with-courses.ts');

// Mapping des modules vers leurs fichiers HTML de cours
const COURSE_HTML_FILES = {
  '1ere-annee': {
    'ANATOMIE 1': 'cours-1ere-annee-anatomie1.html'
  },
  '2eme-annee': {
    'HÉMATOLOGIE FONDAMENTALE': 'cours-2eme-annee-hematologie-fondamentale.html',
    'PHYSIOLOGIE 2': 'cours-2eme-annee-physiologie2.html',
    'SÉMIOLOGIE 2': 'cours-2eme-annee-semiologie2.html'
  }
};

// Extraction des liens depuis un fichier HTML de cours
function extractCoursesFromHTML(htmlContent) {
  const courses = [];

  // Pattern pour capturer les liens dans les <li>
  const regex = /<li[^>]*>.*?<a\s+href="(https:\/\/drive\.google\.com\/[^"]+)".*?>(.+?)<\/a>.*?<\/li>/gis;
  let match;

  while ((match = regex.exec(htmlContent)) !== null) {
    const url = match[1];
    const titleHtml = match[2];

    // Extraire le titre du span ou du texte
    const titleMatch = titleHtml.match(/<span[^>]*>(.+?)<\/span>/i);
    const title = titleMatch
      ? titleMatch[1].trim().replace(/<br\s*\/?>/gi, ' ')
      : titleHtml.trim();

    // Nettoyer le titre
    const cleanTitle = title
      .replace(/<[^>]+>/g, '') // Enlever les balises HTML
      .replace(/\s+/g, ' ') // Remplacer les espaces multiples
      .trim();

    if (cleanTitle && cleanTitle.length > 0) {
      courses.push({
        title: cleanTitle,
        url: url
      });
    }
  }

  return courses;
}

// Extraction des cours pour la 5ème année (structure par année)
function extract5thYearCourses(htmlContent, moduleName) {
  const courses = [];

  // Trouver la ligne du module
  const moduleRegex = new RegExp(`<td[^>]*>\\s*${moduleName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*<\\/td>[\\s\\S]*?<\\/td>[\\s\\S]*?<\\/td>[\\s\\S]*?<\\/td>`, 'gi');
  const moduleMatch = htmlContent.match(moduleRegex);

  if (!moduleMatch) return courses;

  const moduleHtml = moduleMatch[0];

  // Extraire les liens de cours (colonne COURS = 2ème <td>)
  const coursSectionRegex = /<td>([\s\S]*?)<\/td>/g;
  let tdIndex = 0;
  let tdMatch;

  while ((tdMatch = coursSectionRegex.exec(moduleHtml)) !== null) {
    tdIndex++;
    if (tdIndex === 2) { // 2ème <td> = COURS
      const coursHtml = tdMatch[1];

      // Extraire chaque année (2021, 2023, 2024)
      const linkRegex = /<a\s+href="(https:\/\/drive\.google\.com\/[^"]+)"[^>]*>(\d{4})<\/a>/gi;
      let linkMatch;

      while ((linkMatch = linkRegex.exec(coursHtml)) !== null) {
        const url = linkMatch[1];
        const year = linkMatch[2];

        courses.push({
          title: `Cours ${year}`,
          url: url,
          year: year
        });
      }
    }
  }

  return courses;
}

// Fonction principale
function extractAllCourses() {
  console.log('🚀 Début de l\'extraction des cours...\n');

  // Importer les données existantes
  const existingDataPath = path.join(__dirname, 'lib/data/years-content-complete.ts');
  const existingContent = fs.readFileSync(existingDataPath, 'utf-8');

  // Extraire l'objet yearsCompleteData
  const dataMatch = existingContent.match(/export const yearsCompleteData: Record<string, YearData> = ({[\s\S]+});/);
  if (!dataMatch) {
    console.error('❌ Impossible de trouver yearsCompleteData');
    return;
  }

  // Charger les fichiers HTML de cours
  const coursesByModule = {};

  for (const [year, modules] of Object.entries(COURSE_HTML_FILES)) {
    console.log(`📚 Traitement de la ${year}...`);

    for (const [moduleName, htmlFile] of Object.entries(modules)) {
      const filePath = path.join(HTML_FILES_DIR, htmlFile);

      if (!fs.existsSync(filePath)) {
        console.warn(`  ⚠️  Fichier non trouvé: ${htmlFile}`);
        continue;
      }

      const htmlContent = fs.readFileSync(filePath, 'utf-8');
      const courses = extractCoursesFromHTML(htmlContent);

      const key = `${year}|${moduleName}`;
      coursesByModule[key] = courses;

      console.log(`  ✅ ${moduleName}: ${courses.length} cours extraits`);
    }
  }

  // Charger et parser la 5ème année
  console.log(`\n📚 Traitement de la 5ème année...`);
  const year5HtmlPath = path.join(HTML_FILES_DIR, '5eme-annee.html');

  if (fs.existsSync(year5HtmlPath)) {
    const year5Html = fs.readFileSync(year5HtmlPath, 'utf-8');

    // Modules de la 5ème année
    const modules5 = [
      'Santé Publique II',
      'Synthèse Thérptq',
      'Urg-Réa',
      'Psychiatrie',
      'Med Légale -<br>Med Travail',
      'Gynéco-Obstétriq',
      'ORL',
      'Ophtalmo',
      'Uro-Néphro'
    ];

    for (const moduleName of modules5) {
      const courses = extract5thYearCourses(year5Html, moduleName);
      const key = `5eme-annee|${moduleName}`;
      coursesByModule[key] = courses;
      console.log(`  ✅ ${moduleName}: ${courses.length} cours extraits`);
    }
  }

  // Générer le nouveau fichier avec les cours
  console.log('\n📝 Génération du fichier de données...');

  let output = `// Auto-generated with courses
// Generated at: ${new Date().toISOString()}

export interface ExamLink {
  year: string;
  title: string;
  url: string;
}

export interface CourseLink {
  title: string;
  url: string;
  year?: string;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  driveUrl?: string;
  courses?: CourseLink[];
  exams?: ExamLink[];
  corrections?: ExamLink[];
}

export interface YearData {
  description: string;
  modules: Module[];
  resources?: any[];
}

export const yearsCompleteData: Record<string, YearData> = {
`;

  // Parser et modifier les données existantes
  const lines = existingContent.split('\n');
  let inModules = false;
  let currentModule = null;
  let currentYear = null;
  let indentLevel = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Détection de l'année
    if (line.match(/^  "[^"]+": {$/)) {
      currentYear = line.match(/"([^"]+)"/)[1];
      output += line + '\n';
      inModules = false;
      continue;
    }

    // Détection du début des modules
    if (line.includes('modules: [')) {
      inModules = true;
      output += line + '\n';
      continue;
    }

    // Fin des modules
    if (line.includes(']')) {
      inModules = false;
      currentModule = null;
      output += line + '\n';
      continue;
    }

    // Détection d'un module
    if (inModules && line.match(/^\s+{$/)) {
      const nextLine = lines[i + 1];
      if (nextLine && nextLine.includes('id:')) {
        currentModule = nextLine.match(/id: "([^"]+)"/)[1];
      }
      output += line + '\n';
      continue;
    }

    // Ajouter les cours après driveUrl
    if (currentModule && line.match(/^\s+driveUrl:/)) {
      output += line + '\n';

      // Chercher les cours pour ce module
      const moduleName = lines[i + 2]?.match(/name: "([^"]+)"/)?.[1];
      if (moduleName) {
        const key = `${currentYear}|${moduleName}`;

        if (coursesByModule[key] && coursesByModule[key].length > 0) {
          output += `        courses: [\n`;
          coursesByModule[key].forEach((course, idx) => {
            const comma = idx < coursesByModule[key].length - 1 ? ',' : '';
            if (course.year) {
              output += `          { title: "${course.title}", url: "${course.url}", year: "${course.year}" }${comma}\n`;
            } else {
              output += `          { title: "${course.title}", url: "${course.url}" }${comma}\n`;
            }
          });
          output += `        ],\n`;
        }
      }
      continue;
    }

    // Copier les autres lignes
    output += line + '\n';
  }

  output += '};\n';

  // Écrire le fichier de sortie
  fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');

  console.log(`\n✅ Extraction terminée !`);
  console.log(`📄 Fichier généré: ${OUTPUT_FILE}`);

  // Statistiques
  let totalCourses = 0;
  for (const courses of Object.values(coursesByModule)) {
    totalCourses += courses.length;
  }
  console.log(`📊 Total des cours extraits: ${totalCourses}`);
}

// Exécuter
extractAllCourses();
