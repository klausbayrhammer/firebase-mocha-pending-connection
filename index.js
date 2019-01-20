const firebase = require('firebase/app');
require('firebase/database');

firebase.initializeApp({
    apiKey: "AIzaSyBlKyzTd5jDA0q9VPESb-ugm_6qm0zZeoA",
    authDomain: "fir-mocha-pending-connect.firebaseapp.com",
    databaseURL: "https://fir-mocha-pending-connect.firebaseio.com",
    projectId: "fir-mocha-pending-connect",
    storageBucket: "fir-mocha-pending-connect.appspot.com",
    messagingSenderId: "417973163974"
});
firebase.database();

module.exports = () => {
    firebase.app().delete();
};
