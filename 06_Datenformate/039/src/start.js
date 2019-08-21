const fs = require('fs');
const path = require('path');
const csv = require('csv');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'input.csv');

const content = fs.readFileSync(INPUT, 'utf-8');
const parser = csv.parse(content.toString(), { delimiter: ',' });

parser.on('readable', () => {
  while ((data = parser.read())) {
    console.log(data);
  }
});
