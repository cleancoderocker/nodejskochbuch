const fs = require('fs');
const path = require('path');
const csv = require('csv');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'input.csv');

const content = fs.readFileSync(INPUT, 'utf-8');
const parser = csv.parse(content.toString(), { delimiter: ',' });

const toObject = csv.transform((data) => {
	const [name, latitude, longitude, population] = data;
    return JSON.stringify({
      name,
      latitude,
      longitude,
      population
    });
})

parser
  .pipe(toObject)
  .pipe(process.stdout);
