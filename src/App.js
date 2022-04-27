import "./App.css";
import React from "react";
import { Link, Navigate, useNavigate, Route, Routes } from "react-router-dom";
import UserDashboard from "./components/User/User_dashboard/UserDashboard";
import UserLogin from "./components/User/login/Login";
import UserRegister from "./components/User/register/Register";
import Add_pet from "./components/User/add_pet/Add_pet";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import Login from "./components/Admin/login/Login";
import Register from "./components/Admin/register/Register";
import Add_place from "./components/Admin/add_place/Add_place";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
        <Route path="/admin-login" element={<Login />}></Route>
        <Route path="/admin-register" element={<Register />}></Route>
        <Route path="/Add-place" element={<Add_place />}></Route>

        <Route path="/user-dashboard" element={<UserDashboard />}></Route>
        <Route path="/user-login" element={<UserLogin />}></Route>
        <Route path="/user-register" element={<UserRegister />}></Route>
        <Route path="/Add-pet" element={<Add_pet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
