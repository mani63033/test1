import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import BuyArts from "./Components/BuyArts";
import Login from "./Components/Login";
import NavBar from "./Components/Nav";
import Profile from "./Components/Profile";
import Logout from "./Components/Logout";
import Signin from "./Components/Signin";
const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
    <div style={{marginTop:"50px"}}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/BuyArts" element={<BuyArts/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/Logout" element={<Logout/>} />
      <Route path="/Signin" element={<Signin/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
