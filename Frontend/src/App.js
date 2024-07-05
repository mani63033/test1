import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import BuyArts from "./Components/BuyArts";
import Login from "./Components/Login";
import NavBar from "./Components/Nav";
import Profile from "./Components/Profile";
import Logout from "./Components/Logout";
const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/BuyArts" element={<BuyArts/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/Logout" element={<Logout/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
