const redis = require('redis');
const client = redis.createClient();

client.on('error', error => {
  console.log('Error ' + error);
});

client.del('topics');
// Einfügen an den Beginn der Liste:
client.lpush('topics', 'JavaScript is awesome', redis.print);
// Einfügen an das End der Liste:
client.rpush('topics', 'Node.js Best Practices', redis.print);
// Einfügen an den Beginn der Liste:
client.lpush('topics', 'Docker set up', redis.print);

client.lrange('topics', 0, -1, (error, replies) => {
  replies.forEach((reply, i) => {
    console.log(`${i}: ${reply}`);
  });
  client.quit();
});
