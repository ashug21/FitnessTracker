// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCeSP27PA5n71AM5RNqwN5iNOVDsx6_hw",
  authDomain: "fitnesstracker-92b3b.firebaseapp.com",
  projectId: "fitnesstracker-92b3b",
  storageBucket: "fitnesstracker-92b3b.appspot.com",
  messagingSenderId: "476114333540",
  appId: "1:476114333540:web:a63fdb695bf75e36e29471",
  measurementId: "G-85VKE8MENC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);