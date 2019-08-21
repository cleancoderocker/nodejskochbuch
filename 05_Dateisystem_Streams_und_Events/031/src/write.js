const fs = require('fs');
const path = require('path');

const INPUT = path.join(__dirname, '..', 'large.file');

const writableStream = fs.createWriteStream(INPUT);

writableStream.on('finish', () => {
  console.log('File writing completed');
});

for (let i = 0; i <= 100000; i++) {
  writableStream.write(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
  );
}

writableStream.end();
