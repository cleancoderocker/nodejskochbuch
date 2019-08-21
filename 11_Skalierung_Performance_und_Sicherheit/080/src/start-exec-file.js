const { execFile } = require('child_process');
execFile('./input.sh', (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
