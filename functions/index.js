const functions = require('firebase-functions');
const fooModule = require('./foo.js');
const barModule = require('./bar.js');

exports.helloWorld = functions.https.onRequest((req, res) => {
  fooModule.foo();
  barModule.bar();
  res.status(200).send();
});
