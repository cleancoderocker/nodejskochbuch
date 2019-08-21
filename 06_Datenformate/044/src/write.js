const fs = require('fs');
const ini = require('ini');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'config.json');

const content = fs.readFileSync(INPUT, 'utf-8');
const json = JSON.parse(content);
try {
  const config = ini.stringify(json);
  console.log(config);
} catch (error) {
  console.error(error);
}
