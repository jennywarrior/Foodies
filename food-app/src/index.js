import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import Home from './pages/home';
=======
import Login from './pages/login';
import Home from './home';
import SignUp from './pages/signup';
import Profile from './pages/profile';
import Favorites from './pages/favorites';
>>>>>>> main

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <Home />
  </React.StrictMode>
=======
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/favorites" element={<Favorites/>}/>
    </Routes>
  </BrowserRouter>
>>>>>>> main
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
