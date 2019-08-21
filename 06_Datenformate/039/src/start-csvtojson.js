const path = require('path');
const csv = require('csvtojson');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'input.csv');

csv()
  .fromFile(INPUT)
  .then((json) => {
    console.log(json);
  });
