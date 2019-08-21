const WebSocket = require('ws');
const MessageFactory = require('./MessageFactory');
const Protocol = require('./Protocol');

const wss = new WebSocket.Server({
  port: 8089
});

wss.on('connection', (ws) => {
  if (ws.protocol === Protocol.NAME) {
    ws.on('message', (message) => {
      const parsedMessage = JSON.parse(message);
      switch (parsedMessage.meta.type) {
        case Protocol.REQUESTS.START_SONG:
          console.log('Start song request.');
          const event = MessageFactory.createStartedEvent(
            parsedMessage.artist,
            parsedMessage.song
          );
          ws.send(JSON.stringify(event));
          break;
      }
    });
  } else {
    console.error('Protocol not supported.');
  }
});

wss.on('error', (error) => {
  console.error(error);
});

wss.on('listening', () => {
  console.log(`WebSocket server started on port ${wss.options.port}`);
});
