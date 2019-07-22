import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBoI5uce9zsoFkSgKDDYgElmK4u1tidgLc",
  authDomain: "evernote-clone-c09dc.firebaseapp.com",
  databaseURL: "https://evernote-clone-c09dc.firebaseio.com",
  projectId: "evernote-clone-c09dc",
  storageBucket: "evernote-clone-c09dc.appspot.com",
  messagingSenderId: "262234473127",
  appId: "1:262234473127:web:e8489e28aac214de"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
