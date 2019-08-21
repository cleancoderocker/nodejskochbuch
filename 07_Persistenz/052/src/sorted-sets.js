const redis = require('redis');
const client = redis.createClient();

client.on('error', error => {
  console.log('Error ' + error);
});

client.del('tags');
client.zadd('tags', 3, 'javascript', redis.print);
client.zadd('tags', 4, 'nodejs', redis.print);
client.zadd('tags', 1, 'docker', redis.print);
client.zadd('tags', 2, 'docker', redis.print);

client.zrange('tags', 0, -1, (error, replies) => {
  replies.forEach((reply, i) => {
    console.log(`${i}: ${reply}`);
  });
  client.quit();
});
