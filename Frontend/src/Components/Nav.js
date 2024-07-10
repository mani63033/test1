import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { Main_api } from "../apicalls/AllApiCalls";
import axios from "axios";
import { email } from "./Login";
import Profile from "./Profile";

function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const Logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    setIsLoggedIn(false);
    localStorage.removeItem("userid")
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);



  
  
  return (
    <>
      <div className="Top w-full ">
        <div className="Container">
          <div className="Main1">
            <h3>Hey..</h3>
          </div>
          <div className="Main2">
            <Link to="/" className="Link1">Home</Link>
            <Link to="/BuyArts" className="Link1">BuyArts</Link>
            {!isLoggedIn ? (
              <Link to="/login" onClick={() => setIsLoggedIn(false)}>Login</Link>
            ) : (
              <button onClick={Logout}>Logout</button>
            )}
            <Link to="/cart">Cart</Link>
          </div>
          <div className="Main3">
            <Link to="/profile" className="Link2"  >Profile</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
