// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAsnejr7jnAStN0kslJd4GpVd5FqSQrxwM',
  authDomain: 'testing-33e50.firebaseapp.com',
  projectId: 'testing-33e50',
  storageBucket: 'testing-33e50.appspot.com',
  messagingSenderId: '601027756255',
  appId: '1:601027756255:web:5cbc77c6e280619ed6296a',
  measurementId: 'G-EZE48G160K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
