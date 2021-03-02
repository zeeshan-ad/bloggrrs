import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAd62b1yVZ5yKCABEIo8aRl077OXnXLQHs",
    authDomain: "bloggrrs-42e65.firebaseapp.com",
    databaseURL: "https://bloggrrs-42e65-default-rtdb.firebaseio.com",
    projectId: "bloggrrs-42e65",
    storageBucket: "bloggrrs-42e65.appspot.com",
    messagingSenderId: "603750377161",
    appId: "1:603750377161:web:669b6e64bdbcfe917f0f18",
    measurementId: "G-C9RF7BZ06C"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;