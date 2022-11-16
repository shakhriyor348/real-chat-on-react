import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDQGr3kOjoeOvewD0uCX4GLIkm4rde-GhE",
  authDomain: "chat-react-41234.firebaseapp.com",
  projectId: "chat-react-41234",
  storageBucket: "chat-react-41234.appspot.com",
  messagingSenderId: "745207510163",
  appId: "1:745207510163:web:58a088bc5bcb2d38a4c966",
  measurementId: "G-B324QJLS2D"
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


