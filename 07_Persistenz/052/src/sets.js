const redis = require('redis');
const client = redis.createClient();

client.on('error', error => {
  console.log('Error ' + error);
});

client.del('tags');
client.sadd('tags', 'javascript', redis.print);
client.sadd('tags', 'nodejs', redis.print);
client.sadd('tags', 'docker', redis.print);
client.sadd('tags', 'docker', redis.print);

client.smembers('tags', (error, replies) => {
  replies.forEach((reply, i) => {
    console.log(`${i}: ${reply}`);
  });
  client.quit();
});
