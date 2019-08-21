const fs = require('fs-extra');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'input.txt');

try {
  const content = fs.readFileSync(INPUT);
  console.log(content.toString());
} catch (error) {
  console.error(error);
}
