const redis = require('redis');
const client = redis.createClient();

client.on('error', error => {
  console.log('Error ' + error);
});

client.del('maxmustermann');
client.hset('maxmustermann', 'firstName', 'Max');
client.hset('maxmustermann', 'lastName', 'Mustermann');
client.hset('maxmustermann', 'age', 45);

client.hkeys('maxmustermann', (error, replies) => {
  replies.forEach((reply, i) => {
    console.log(`${i}: ${reply}`);
  });
  client.quit();
});
