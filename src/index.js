import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB4_jTdLpknPXFEK0AgkPcq4M29y24Dli4",
  authDomain: "chat-7263a.firebaseapp.com",
  projectId: "chat-7263a",
  storageBucket: "chat-7263a.appspot.com",
  messagingSenderId: "271034399294",
  appId: "1:271034399294:web:c09ab5a198c8be1c756f6f",
  measurementId: "G-6KMVGMVVMX"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>
);


