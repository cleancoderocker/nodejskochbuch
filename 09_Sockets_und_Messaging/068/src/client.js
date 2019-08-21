const WebSocket = require('ws');
const MessageFactory = require('./MessageFactory');
const Protocol = require('./Protocol');

const ws = new WebSocket('ws://localhost:8089', Protocol.NAME);

ws.on('open', () => {
  const message = MessageFactory.createStartRequest(
    'The Doors',
    'Strange Days'
  );
  ws.send(JSON.stringify(message));
});
ws.on('message', (message) => {
  const parsedMessage = JSON.parse(message);
  switch (parsedMessage.meta.type) {
    case Protocol.EVENTS.STARTED_SONG:
      console.log('Server started song.');
      break;
  }
});
