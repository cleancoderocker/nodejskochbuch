const { exec } = require('child_process');
const cmd = 'docker ps';
exec(cmd, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
