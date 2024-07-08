
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
               <b> <h2 className="text-xl">Every Canvas Is A journey</h2><h2> All Its Own</h2></b>
                <Link to="/BuyArts"><button className="btn bg-white text-red-600">Buy Arts</button></Link>
           </div>
   
        </>)
    }
export default Home