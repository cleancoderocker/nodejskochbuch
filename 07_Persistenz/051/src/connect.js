const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';

MongoClient.connect(URL, (error, client) => {
  if (error) {
    throw error;
  }
  console.log('Connected successfully to server');
  client.close();
});
