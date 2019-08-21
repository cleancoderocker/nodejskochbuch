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

const queue = 'example-queue';

(async () => {
  try {
    const connection = await amqp.connect(configuration);
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    await channel.consume(queue, (message) => {
      if (message !== null) {
        console.log(message.content.toString());
        channel.ack(message);
      }
    });
  } catch (error) {
    console.error(error);
  }
})();
