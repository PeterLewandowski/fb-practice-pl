// Import our restaurants ('./') pulls up all files in the folder, choose the right file
const restuarants = require('./restaurants.json');

console.log(restuarants[0].name)

// import a set of tools to talk to Firebase and Firestore
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// connect to Firestore
const credentials = require('./credentials.json');

// create a collection called "restaurants"

// add each restaurant

