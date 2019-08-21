const amqp = require('amqplib');

const configuration = {
  hostname: 'localhost',
  connectionTimeout: 10000,
  authMechanism: 'AMQPLAIN',
  vhost: '/',
  noDelay: true,
  ssl: {
    enabled: true
  }
};

const queue1 = 'example-queue';
const queue2 = 'example-queue';

(async () => {
  try {
    const connection = await amqp.connect(configuration);
    const channel = await connection.createChannel();
    await channel.assertQueue(queue1);
    await channel.assertQueue(queue2);
    await channel.consume(queue1, (message) => {
      if (message !== null) {
        console.log('Message from queue 1');
        console.log(message.content.toString());
        channel.ack(message);
      }
    });
    await channel.consume(queue2, (message) => {
      if (message !== null) {
        console.log('Message from queue 2');
        console.log(message.content.toString());
        channel.ack(message);
      }
    });
  } catch (error) {
    console.error(error);
  }
})();
