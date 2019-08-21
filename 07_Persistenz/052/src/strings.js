const redis = require('redis');
const client = redis.createClient();

client.on('error', error => {
  console.log('Error ' + error);
});

client.del('username');
client.set('username', 'maxmustermann', redis.print);
client.get('username', redis.print);

client.keys('username', (error, replies) => {
  replies.forEach((reply, i) => {
    console.log(`${i}: ${reply}`);
  });
  client.quit();
});
