const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\kat95\\OneDrive\\Documents\\React\\The Speakers Firm';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walkDir(baseDir, (filePath) => {
  // Only process ts, tsx, js, jsx files, excluding node_modules and .git
  if (filePath.includes('node_modules') || filePath.includes('.git') || filePath.includes('.next')) {
    return;
  }
  if (!/\.(tsx|ts|js|jsx)$/.test(filePath)) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace exact matches of "View Intelligence Profile" with "BOOK THE SPEAKER"
  content = content.replace(/View Intelligence Profile/g, 'BOOK THE SPEAKER');
  
  // Replace exact matches of "View Profile" with "BOOK THE SPEAKER" (but avoid replacing file names, paths or unrelated stuff unless it's the exact text/prop)
  content = content.replace(/\bView Profile\b/g, 'BOOK THE SPEAKER');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
});
