import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBI-IqSGYD6L2-XDlUEBbLTezB_0dA0O2s",
  authDomain: "my-react-blog-87d1d.firebaseapp.com",
  projectId: "my-react-blog-87d1d",
  storageBucket: "my-react-blog-87d1d.appspot.com",
  messagingSenderId: "493208242902",
  appId: "1:493208242902:web:ab48202e8699f3f62b9777"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
