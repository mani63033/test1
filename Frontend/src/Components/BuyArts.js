import React, { useEffect, useState } from "react";
import NavBar from "./Nav";
import "./buyarts.css";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "../assests/uploads/one.png";
import img2 from "../assests/uploads/two.jpg";
import img3 from "../assests/uploads/three.png";
import { Main_api } from "../apicalls/AllApiCalls";

const BuyArts = () => {
  const [arts, setArts] = useState([]);

    useEffect(() => {
      async function get() {
        try {
          const token = localStorage.getItem('authToken');
          console.log(token);
          if (!token) {
            throw new Error('Authorization token not found');
          }
  
  
          let res = await axios.get(`${Main_api}/product`, {
            headers: {
              authorization:token
            }
          });
          setArts(res.data);
          console.log("API Response:", res.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    get();
  }, []);
   
  return (
    <>
    <div id="buyarts">
      {arts.map((item,index) => (
        <div className="card" style={{ width: "18rem",height:"500px" }} key={item.id}>
          <img
            className="card-img-top"
            src={`http://192.168.29.100:8001${item.image}`}
            alt="Card image cap" style={{height:"300px"}}/>
          <div className="card-body c-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.size}</p>
            <div className="crad-last">
            <span>${item.price}</span>
            <Link to={"/BuyArts"} className="btn btn-primary">Buy Arts</Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default BuyArts;
