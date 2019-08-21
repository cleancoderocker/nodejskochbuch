const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'large.file');

const readableStream = fs.createReadStream(INPUT, {
  encoding: 'utf-8'
});

readableStream.on('readable', () => {
  console.log(readableStream.read());
});

readableStream.on('end', () => {
  console.log('File reading completed');
});
