const fs = require('fs-extra');
const klaw = require('klaw');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input');

const stream = klaw(INPUT);
stream.on('data', (item) => {
	console.log(item.constructor.__proto)
  const filePath = item.path;
  const timeCreated = item.stats.birthtime.toUTCString();
  console.log(filePath);
  console.log(timeCreated);
  if (item.stats.isFile()) {
    const content = fs.readFileSync(filePath).toString();
    console.log(content);
  }
});
stream.on('end', () => {
  console.log('done');
});
