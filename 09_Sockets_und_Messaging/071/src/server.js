const mosca = require('mosca');

const settings = {
  port: 1883
};

const server = new mosca.Server(settings);

server.on('clientConnected', (client) => {
  console.log(`Client connected: ${client.id}`);
  console.log('********************');
});

server.on('clientDisconnected', (client) => {
  console.log(`Client disconnected: ${client.id}`);
  console.log('********************');
});

server.on('published', (packet, client) => {
	console.log('New message received');
	console.log(`Topic: ${packet.topic}`);
	console.log(`Payload: ${packet.payload}`);
	console.log(`Message ID: ${packet.messageId}`);
	console.log(`QoS Level: ${packet.qos}`);
	console.log(`Retained Message: ${packet.retain}`);
	console.log('********************');
});

server.on('ready', () => {
  console.log(`Mosca server started at port: ${settings.port}`);
});
