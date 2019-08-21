const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';
const DATABASE = 'example';
const COLLECTION = 'contacts';

MongoClient.connect(URL, (error, client) => {
  console.log('Connected successfully to server');
  const db = client.db(DATABASE);
  const collection = db.collection(COLLECTION);
  collection.find().toArray((error, contacts) => {
    if (error) {
      throw error;
    }
    console.log(contacts);
  });
  client.close();
});
