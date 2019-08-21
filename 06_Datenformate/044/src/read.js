const fs = require('fs');
const ini = require('ini');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'config.ini');

const content = fs.readFileSync(INPUT, 'utf-8');
try {
  const config = ini.parse(content);
  console.log(JSON.stringify(config, null, 2));
} catch (error) {
  console.error(error);
}
