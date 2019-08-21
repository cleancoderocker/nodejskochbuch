const fs = require('fs');
const toml = require('toml');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'config.toml');

const content = fs.readFileSync(INPUT, 'utf-8');
try {
  const config = toml.parse(content);
  console.log(JSON.stringify(config, null, 2));
} catch (error) {
  console.error(error);
}
