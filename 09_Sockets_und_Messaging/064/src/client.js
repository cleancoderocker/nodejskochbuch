const net = require('net');

const PORT = 1337;
const HOST = '127.0.0.1';

const client = net.createConnection(PORT, HOST);

client.on('connect', () => {
  client.write('Hello World');
});

client.on('data', (data) => {
  console.log(`Data received from server: ${data.toString()}`);
});

client.on('close', () => {
  console.log('Connection closed');
});

client.on('error', (error) => {
  console.error(error);
});
