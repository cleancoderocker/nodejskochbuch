const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const DOWNLOAD_DIR = path.join(__dirname, 'downloads');

const download = (url) => {
  const fileName = url.parse(url).pathname.split('/').pop();
  const file = fs.createWriteStream(DOWNLOAD_DIR + fileName);
  const curl = spawn('curl', [url]);
  curl.stdout.on('data',(data) => file.write(data));
  curl.stdout.on('end', (data) => {
    file.end();
    console.log(`${fileName} downloaded to ${DOWNLOAD_DIR}`);
  });
  curl.on('exit', (code) => {
    if (code === 0) {
      console.log('Download successful');
    } else {
      console.log(`Download failed: ${code}`);
    }
  });
};
