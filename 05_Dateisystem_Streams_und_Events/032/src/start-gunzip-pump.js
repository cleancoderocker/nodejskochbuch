const fs = require('fs-extra');
const path = require('path');
const zlib = require('zlib');
const pump = require('pump');

const INPUT = path.join(__dirname, '..', 'data', 'logs.log.gz');
const OUTPUT = path.join(__dirname, '..', 'data', 'output');
const OUTPUT_FILE = path.join(OUTPUT, 'logs.log');

fs.emptyDirSync(OUTPUT);

const inputStream = fs.createReadStream(INPUT);
const outputStream = fs.createWriteStream(OUTPUT_FILE);
const gunzip = zlib.createGunzip();

inputStream.pipe(gunzip).pipe(outputStream);

pump(
  inputStream, 
  gunzip, 
  outputStream, 
  (error) => {
    if (error) {
      console.error('Unzipping failed.');
    } else {
      console.log('Unzipping succeeded.');
    }
  }
);
