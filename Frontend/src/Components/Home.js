import React from "react";
import NavBar from "./Nav";
import "./Home.css";
import img from "../assests/Art.jpg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const check = () => {
        let token = localStorage.getItem("authToken");
        if (token) {
            navigate("/BuyArts"); // Redirect to BuyArts if token is present
        } else {
            navigate("/login"); // Redirect to login page if token is not present
        }
    };

    return (
        <>
            <div className="Home">
                <img src={img} alt="Error" className="Image" />
            </div>
            <div className="BuyNow">
                <b>
                    <h2 className="text-xl">Every Canvas Is A journey</h2>
                    <h2> All Its Own</h2>
                </b>
                <button className="btn bg-white text-red-600" onClick={check}>
                    Buy Arts
                </button>
            </div>
        </>
    );
};

export default Home;
