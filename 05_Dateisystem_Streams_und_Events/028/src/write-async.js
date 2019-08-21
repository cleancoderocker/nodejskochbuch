const fs = require('fs-extra');
const path = require('path');

const OUTPUT = path.join(__dirname, '..', 'data', 'output', 'output.txt');
const content = 'Hello World';

fs
  .writeFile(OUTPUT, content)
  .then(() => {
    console.log('Datei erstellt');
  })
  .catch((error) => {
    console.error(error);
  });
