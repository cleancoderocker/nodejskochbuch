const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';
const DATABASE = 'example';
const COLLECTION = 'contacts';

MongoClient.connect(URL, (error, client) => {
  console.log('Connected successfully to server');
  const db = client.db(DATABASE);
  const collection = db.collection(COLLECTION);
  collection.updateOne(
    {
      firstName: 'Max',
      lastName: 'Mustermann'
    },
    { $set: { age: 46 } },
    (error, result) => {
      if (error) {
        throw error;
      }
	  console.log('Updated document');
    }
  );
  client.close();
});
