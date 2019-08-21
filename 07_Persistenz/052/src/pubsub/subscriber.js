const redis = require('redis');
const subscriber = redis.createClient();

subscriber.on('subscribe', (channel, count) => {
  console.log(`Subscriber subscribed to channel "${channel}"`);
});

subscriber.on('message', (channel, message) => {
  const parsedMessage = JSON.parse(message);
  console.log(parsedMessage.content);
});

subscriber.subscribe('example-channel');
