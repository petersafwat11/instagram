// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIRBASE_API_KEY,
  authDomain: process.env.FIRBASE_AUTH_DOMAIN,
  projectId:process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGENG_SENDER_ID ,
  appId:process.env.FIREBASE_API_ID ,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = getApps().length()===0? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();
export {app, storage, db} 
