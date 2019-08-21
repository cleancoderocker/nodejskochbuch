const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost'],
  keyspace: 'userdata'
});

const query =
  'INSERT INTO users (key, firstname, lastname, email, birthdate) VALUES (?, ?, ?, ?, ?)';
const params = [
  'maxmustermann',
  'Max',
  'Mustermann',
  'maxmustermann@nodejsbuch.de',
  new Date(1979, 5, 25)
];

(async () => {
  const result = await client.execute(query, params);
})();
