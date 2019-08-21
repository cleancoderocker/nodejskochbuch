const redis = require('redis');
const publisher = redis.createClient();

const message = {
	content: 'Hello World'
}
publisher.publish('example-channel', JSON.stringify(message));
