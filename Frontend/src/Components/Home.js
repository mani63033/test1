
import React from "react";
import NavBar from "./Nav";
import "./Home.css";
import img from "../assests/Art.jpg";
import { Link } from "react-router-dom";
import BuyArts from "./BuyArts";
const Home=()=>
    {
       return( 
       <>
           <div className="Home">
            <img src={img} alt="Error" className="Image" />
           </div>
           <div className="BuyNow">
                <h2>Every Canvas Is A journey<br/> All Its Own</h2>
                <Link to="/BuyArts"><button className="btn">Buy Arts</button></Link>
           </div>
   
        </>)
    }
export default Home