const { spawn } = require('child_process');

const tail = spawn('tail', ['-F', '-n', '1', 'access.log']);

tail.stdout.on('data', (data) => {
  data = data.toString();
  console.log(data);
});

tail.stderr.on('data', (data) => {
  console.error(`Error:\n${data}`);
});
