const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'large.file');

const readableStream = fs.createReadStream(INPUT);

readableStream.on('data', (data) => {
  console.log(data.toString('utf-8'));
});

readableStream.on('end', () => {
  console.log('File reading completed');
});
