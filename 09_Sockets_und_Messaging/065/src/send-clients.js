const WebSocket = require('ws');
const wss = new WebSocket.Server({
  port: 8080
});
wss.on('connection', (ws) => {
  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send('New client connected.');
    }
  });
});
