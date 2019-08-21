const WebSocket = require('ws');
const wss = new WebSocket.Server({
  port: 8080
});
wss.on('connection', (ws) => {
  console.log('New client connected.');
  ws.send('Hello client');
  ws.on('message', (message) => {
    console.log(`received: ${message}`);
    ws.send('Message received');
  });
  ws.on('close', () => {
    console.log('Client closed connection.');
  });
});