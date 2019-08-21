const fs = require('fs');
const path = require('path');
const csv = require('csv');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'input.csv');

const content = fs.readFileSync(INPUT, 'utf-8');
const parser = csv.parse(content.toString(), { delimiter: ',' });
const result = [];

parser.on('readable', () => {
  while ((data = parser.read())) {
    const [name, latitude, longitude, population] = data;
    const dataRecord = {
      name,
      latitude,
      longitude,
      population
    };
    result.push(dataRecord);
  }
  // Objekt für erste Zeile, welches die
  // Überschriften enthält, entfernen
  result.shift();
});

parser.on('end', () => {
  console.log(result);
});
