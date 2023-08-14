// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz-IcLzSKkyotppno-JRvrmsXKvvpe9Gc",
  authDomain: "peralink-fa83f.firebaseapp.com",
  projectId: "peralink-fa83f",
  storageBucket: "peralink-fa83f.appspot.com",
  messagingSenderId: "532423704783",
  appId: "1:532423704783:web:601036930d29ceca0d77ba",
  measurementId: "G-5BFF7NBRKR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
