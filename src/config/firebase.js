// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5GVrJPwTRXZTangPfvwem2MZv4tY4LVo',
  authDomain: 'testing-adab5.firebaseapp.com',
  projectId: 'testing-adab5',
  storageBucket: 'testing-adab5.appspot.com',
  messagingSenderId: '365526130316',
  appId: '1:365526130316:web:4f42184ede688f2d5de5a9',
  measurementId: 'G-N720YSXBCK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
