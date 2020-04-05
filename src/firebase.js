import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9fmWkMyn4jGfiJjilAPJipwhcfedPtTI",
    authDomain: "vue-shop-d54a8.firebaseapp.com",
    databaseURL: "https://vue-shop-d54a8.firebaseio.com",
    projectId: "vue-shop-d54a8",
    storageBucket: "vue-shop-d54a8.appspot.com",
    messagingSenderId: "418200758699",
    appId: "1:418200758699:web:34808b63b181900ee14aee",
    measurementId: "G-HK8RKXBHWC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();