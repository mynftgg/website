import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './index.css';
import App from './App';

import LeaderboardPage from './pages/LeaderboardPage';
import reportWebVitals from './reportWebVitals';

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/leaderboard" element={<LeaderboardPage />}/>
   </Routes>
   </BrowserRouter>
   ,   
  document.getElementById('root')
);

  // {/* <React.StrictMode>
  //   <App />
  // </React.StrictMode>, */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
