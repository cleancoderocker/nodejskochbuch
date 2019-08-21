const fs = require('fs-extra');
const path = require('path');
const zlib = require('zlib');
const pump = require('pump');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'logs.log');
const OUTPUT = path.join(__dirname, '..', 'data', 'logs.log.gz');

const inputStream = fs.createReadStream(INPUT);
const outputStream = fs.createWriteStream(OUTPUT);
const gzip = zlib.createGzip();

pump(
  inputStream, 
  gzip, 
  outputStream, 
  (error) => {
    if (error) {
      console.error('Zipping failed.');
    } else {
      console.log('Zipping succeeded.');
    }
  }
);
