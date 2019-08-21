const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'input.yml');

try {
  const fileContent = fs.readFileSync(INPUT, 'utf8');
  const document = yaml.safeLoad(fileContent);
  console.log(JSON.stringify(document, null, 2));
} catch (error) {
  console.error(error);
}
