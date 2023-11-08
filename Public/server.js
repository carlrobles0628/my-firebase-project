const admin = require('firebase-admin');
const serviceAccount = require('C:/authcrud/serviceAccountKey.json'); // Replace with the path to your service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://login-with-firebase-data-fbeba.firebaseio.com' // Replace with your Firebase project URL
});

const db = admin.database();

const ref = db.ref('user'); // Reference to a specific location in your database

// Example: Writing data to the database
ref.set({
  key1: 'value1',
  key2: 'value2'
});

// Example: Reading data from the database
ref.once('value')
  .then((snapshot) => {
    const data = snapshot.val();
    console.log(data);
  })
  .catch((error) => {
    console.error('Error reading from the database: ', error);
  });
