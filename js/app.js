const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBLlWA6zjbOghpdbomWAWI6hG9mTWRMOBQ',
  authDomain: 'online-game-room.firebaseapp.com',
  projectId: 'online-game-room'
});

var db = firebase.firestore();

