const fs = require('fs');

const watcher = fs.watch(__dirname, (event, filename) => {
  console.log('Listener 1');
  console.log(event);
  console.log(filename);
});

watcher.on('change', (event, filename) => {
  console.log('Listener 2');
  console.log(event);
  console.log(filename);
});
