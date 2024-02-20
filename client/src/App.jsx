import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const { isLogIn } = useSelector((state) => state.auth);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute id={isLogIn} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
