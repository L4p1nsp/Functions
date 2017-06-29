const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.lowercase = functions.database.ref(`messages/{messageId}`)
  .onWrite(event => {
    const messageKey = event.data.key;
    const messageValue = event.data.val();

    const lowerCaseBody = messageValue.body.toLowerCase();

    return event.data.ref.child('lowerCase').set(lowerCaseBody);
    // Messages /Message ID
    // title: 'Hey'
    // body: 'My body content'
    // lowercase : 'my body content'
  });
// UperCase 
exports.uppercase = functions.database.ref(`messages/{messageId}`)
  .onWrite(event => {
    const messageKey = event.data.key;
    const messageValue = event.data.val();

    const upperCaseBody = messageValue.body.toUpperCase();

    return event.data.ref.child('upperCase').set(upperCaseBody);
  });
