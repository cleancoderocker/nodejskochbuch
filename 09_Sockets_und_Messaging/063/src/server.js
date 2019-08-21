const net = require('net');

const PORT = 1337;
const HOST = '127.0.0.1';

const server = net.createServer((socket) => {
  socket.write('Example server\n');
});

server.on('listening', () => {
  const address = server.address();
  const port = address.port;
  const family = address.family;
  const ipaddress = address.address;
  console.log(`Server is listening at port: ${port}`);
  console.log(`Server ip: ${ipaddress}`);
  console.log(`Server is IP4/IP6: ${family}`);
});

server.on('connection', (socket) => {
  socket.write('Hello client\n');
  const { localAddress, localPort } = socket;
  console.log(`Server is listening at local port: ${localPort}`);
  console.log(`Server local ip: ${localAddress}`);

  const { remotePort, remoteAddress, remoteFamily } = socket;

  console.log(`Remote socket is listening at port: ${remotePort}`);
  console.log(`Remote socket ip; ${remoteAddress}`);
  console.log(`Remote socket is IP4/IP6: ${remoteFamily}`);

  socket.on('data', (data) => {
    socket.write(data);
    const { bytesRead, bytesWritten } = socket;
    console.log(`Bytes read: ${bytesRead}`);
    console.log(`Bytes written: ${bytesWritten}`);
    console.log(`Data sent to server: ${data.toString()}`);
  });

  socket.on('end', (data) => {
    console.log('Socket ended from client');
    server.getConnections((error, count) => {
      console.log(`Number of concurrent connections to the server: ${count}`);
    });
  });

  server.getConnections((error, count) => {
    console.log(`Number of concurrent connections to the server: ${count}`);
  });
});

server.on('error', (error) => {
  console.error(error);
});

server.listen(PORT, HOST);
