import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sigup from "./pages/Sigup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="w-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn = {isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setisLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Sigup setIsLoggedIn={setisLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn = {isLoggedIn} >
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
