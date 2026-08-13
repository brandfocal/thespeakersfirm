const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\kat95\\OneDrive\\Documents\\React\\The Speakers Firm\\components\\Header.tsx', 'utf8');

let curlyCount = 0;
let parenCount = 0;

for (let i = 0; i < content.length; i++) {
  if (content[i] === '{') curlyCount++;
  if (content[i] === '}') curlyCount--;
  if (content[i] === '(') parenCount++;
  if (content[i] === ')') parenCount--;
}

console.log('Curly balance:', curlyCount);
console.log('Paren balance:', parenCount);
