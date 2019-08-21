const PORT = 8080;
const HOST = '0.0.0.0';
const Server = require('./src/Server');
const server = new Server(HOST, PORT);
server.start();
