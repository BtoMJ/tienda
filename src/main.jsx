import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import axios from 'axios';
import dotenv from 'dotenv';
import store from "./redux/store.js";
// import store from '//src/redux/store.js'
// const {REACT_APP_AWS_PORT} = process.env;

// dotenv.config();
// axios.defaults.baseURL = REACT_APP_AWS_PORT || "http://localhost:3001";
axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
