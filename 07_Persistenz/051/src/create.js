const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';
const DATABASE = 'example';
const COLLECTION = 'contacts';

MongoClient.connect(URL, (error, client) => {
  console.log('Connected successfully to server');
  const db = client.db(DATABASE);
  const collection = db.collection(COLLECTION);
  const contact = {
	  firstName: 'Max',
	  lastName: 'Mustermann',
	  age: 45
  }
  collection.insert(contact, (error, result) => {
    if (error) {
      throw error;
    }
  });
  client.close();
});
