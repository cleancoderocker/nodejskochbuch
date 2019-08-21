const net = require('net');
const isWindows = require('os').type() === 'Windows_NT';
const socketPath = isWindows
  ? '//./pipe/docker_engine'
  : '/var/run/docker.sock';

const getContainers = (all) => {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ path: socketPath });
    const parts = [];

    socket.on('connect', () => {
      socket.write(
        `GET http:/containers/json${all ? '?all=1' : ''} HTTP/1.0\r\n\r\n`
      );
    });

    socket.on('data', (data) => {
      parts.push(data.toString());
    });

    socket.on('error', () => {
      reject({});
    });

    socket.on('end', () => {
      let allData = parts.join('');
      const startIndex = allData.indexOf('[');
      const endIndex = allData.length;
      allData = allData.substring(startIndex, endIndex);
      try {
        const result = JSON.parse(allData);
        resolve(result);
      } catch (err) {
        reject({});
      }
    });
  });
};

(async () => {
  const containers = await getContainers(true);
  containers.forEach((container) => {
    console.log(`Id: ${container.Id}`);
    console.log(`Names: ${container.Names.join('')}`);
  });
})();
