const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['localhost']
});

const queryKeyspace =
  "CREATE KEYSPACE IF NOT EXISTS userdata WITH REPLICATION = { 'class'  : 'SimpleStrategy', 'replication_factor' : 1 }";
const queryTable = 'CREATE TABLE IF NOT EXISTS userdata.users(key text PRIMARY KEY, firstName text, lastName text, email text, birthdate timestamp);';
(async () => {
  await client.execute(queryKeyspace);
  await client.execute(queryTable);
})();
