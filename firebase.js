// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAAVmtuS27uwbQruapqEC6umEVbIY-MTQ",
  authDomain: "peralink-4dca9.firebaseapp.com",
  projectId: "peralink-4dca9",
  storageBucket: "peralink-4dca9.appspot.com",
  messagingSenderId: "1080404416934",
  appId: "1:1080404416934:web:a3170201044548714e5767",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;
