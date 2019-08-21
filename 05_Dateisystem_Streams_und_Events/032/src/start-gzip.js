const fs = require('fs-extra');
const path = require('path');
const zlib = require('zlib');

const INPUT = path.join(__dirname, '..', 'data', 'input', 'logs.log');
const OUTPUT = path.join(__dirname, '..', 'data', 'logs.log.gz');

const inputStream = fs.createReadStream(INPUT);
const outputStream = fs.createWriteStream(OUTPUT);
const gzip = zlib.createGzip();

inputStream.pipe(gzip).pipe(outputStream);
