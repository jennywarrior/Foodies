import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/login";
import Home from "./home";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Favorites from "./pages/favorites";

import { AuthProvider } from "./contexts/AuthContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import WithNonPrivateRoute from "./utils/WithNonPrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <WithNonPrivateRoute>
              <Login />
            </WithNonPrivateRoute>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <WithNonPrivateRoute>
              <SignUp />
            </WithNonPrivateRoute>
          }
        />

        <Route
          exact
          path="/"
          element={
            <WithPrivateRoute>
              <Home />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <WithPrivateRoute>
              <Profile />
            </WithPrivateRoute>
          }
        />
        <Route
          exact
          path="/favorites"
          element={
            <WithPrivateRoute>
              <Favorites />
            </WithPrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
