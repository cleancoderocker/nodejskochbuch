const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';
const DATABASE = 'example';
const COLLECTION = 'contacts';

MongoClient.connect(URL, (error, client) => {
  console.log('Connected successfully to server');
  const db = client.db(DATABASE);
  const collection = db.collection(COLLECTION);
  const contacts = [
    {
      firstName: 'Moritz',
	  lastName: 'Mustermann',
	  age: 45
    },
    {
      firstName: 'Peter',
      lastName: 'Mustermann',
	  age: 68
    },
    {
      firstName: 'Petra',
      lastName: 'Mustermann',
	  age: 66
    }
  ];
  collection.insertMany(contacts, (error, result) => {
    if (error) {
      throw error;
    }
  });
  client.close();
});
