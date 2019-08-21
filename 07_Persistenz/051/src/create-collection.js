const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';
const DATABASE = 'example';
const COLLECTION = 'contacts';

MongoClient.connect(URL, (error, client) => {
  console.log('Connected successfully to server');
  const db = client.db(DATABASE);
  db.createCollection(COLLECTION, (error, collection) => {
    if (error) {
      return error;
    }
    console.log('Collection created');
    client.close();
  });
});
