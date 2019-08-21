const fs = require('fs-extra');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'data', 'input.txt');

fs
  .stat(INPUT)
  .then((stats) => {
    console.log(stats.isFile()); // true
    console.log(stats.isDirectory()); // false
    console.log(stats);
    // Stats {
    // dev: 16777220,
    // mode: 33188,
    // nlink: 1,
    // uid: 501,
    // gid: 20,
    // rdev: 0,
    // blksize: 4096,
    // ino: 140951682,
    // size: 11,
    // blocks: 8,
    // atimeMs: 1541430220000,
    // mtimeMs: 1541430220000,
    // ctimeMs: 1541430220000,
    // birthtimeMs: 1541429675000,
    // atime: 2018-11-05T15:03:40.000Z,
    // mtime: 2018-11-05T15:03:40.000Z,
    // ctime: 2018-11-05T15:03:40.000Z,
    // birthtime: 2018-11-05T14:54:35.000Z }
  })
  .catch((error) => {
    console.error(error);
  });

function details(mode) {

	console.log(`owner Read:     ${mode & 400 ? 'r' : '-'}`);
	console.log(`owner Write:    ${mode & 200 ? 'w' : '-'}`);
	console.log(`owner eXecute:  ${mode & 100 ? 'x' : '-'}`);

  console.log(`group Read:     ${mode & 40 ? 'r' : '-'}`);
  console.log(`group Write:    ${mode & 20 ? 'w' : '-'}`);
  console.log(`group eXecute:  ${mode & 10 ? 'x' : '-'}`);
	
  console.log(`others Read:    ${mode & 4 ? 'r' : '-'}`);
  console.log(`others Write:   ${mode & 2 ? 'w' : '-'}`);
  console.log(`others eXecute: ${mode & 1 ? 'x' : '-'}`);

  console.log(`file:           ${mode & 0100000 ? 'f' : '-'}`);
  console.log(`directory:      ${mode & 0040000 ? 'd' : '-'}`);
}

function permissions(mode) {
  return '0' + (mode & parseInt('777', 8)).toString(8);
}
