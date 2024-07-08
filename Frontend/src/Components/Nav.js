import React from "react";
import {Link} from  "react-router-dom";
import "./Nav.css";
function NavBar(){
  const Logout=()=>
  {
    let
  }
  return(
    <>
    <div className="Top w-full">
    <div className="Container">
      <div className="Main1">
        <h3>Hey..</h3>
      </div>
      <div className="Main2">
          <Link to="/" className="Link1">Home</Link>
          <Link to="/BuyArts" className="Link1">BuyArts</Link>
          <Link to="/Login" className="Link1">Login</Link>
      </div>
      <div className="Main3">
          <Link to="/profile" className="Link2">Profile</Link>
          <Link to="/Logout" className="Link2"><button onClick={Logout}>Logout</button></Link>
      </div>

    </div>
    </div>
    </>
  )
}
export default NavBar;