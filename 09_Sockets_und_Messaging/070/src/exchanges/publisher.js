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

const exchange = 'example-fanout-exchange';
const queue1 = 'example-queue';
const queue2 = 'example-queue-2';

(async () => {
  try {
    const connection = await amqp.connect(configuration);
	const channel = await connection.createChannel();
	await channel.assertExchange(exchange, 'fanout');
    await channel.assertQueue(queue1);
	await channel.assertQueue(queue2);
	await channel.bindQueue(queue1, exchange, '');
	await channel.bindQueue(queue2, exchange, '');
    await channel.publish(exchange, '', Buffer.from('Hello World!'));
  } catch (error) {
    console.error(error);
  }
})();

