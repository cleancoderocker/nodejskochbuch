const fs = require('fs-extra');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'input.txt');

// Callback-API
fs.readFile(INPUT, (error, content) => {
  if (error) {
    return console.error(error);
  }
  console.log(content.toString());
});

// Promise-API
fs
  .readFile(INPUT)
  .then((content) => {
    console.log(content.toString());
  })
  .catch((error) => {
    console.error(error);
  });
