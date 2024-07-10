import React, { useEffect, useRef, useState } from "react";
import NavBar from "./Nav";
import "./buyarts.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Main_api } from "../apicalls/AllApiCalls";
import AddtoCart from "./AddtoCart";
const BuyArts = () => {
  const [arts, setArts] = useState([]);
  let elementid=useRef(null)
  const navigate=useNavigate()
  const token=localStorage.getItem("authToken");
  const userid=localStorage.getItem("userid");
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

  const cart = async (id) => {
    console.log(id);
  
    try {
      const response = await axios.post(
        `${Main_api}/product/addcart`,
        { productid: id,userid:userid },
        {
          headers: {
            authorization: token
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  return (
    <>
    <div id="buyarts">
      {arts.map((item) => {
        return (
      <>
        
        <div className="card" style={{ width: "18rem",height:"500px" }} key={item.id}>
        <Link to={`/product/${item._id}`}>
          <img
            className="card-img-top"
            src={`${Main_api}${item.image}`}
            alt="Card image cap" style={{height:"300px"}}  /> </Link>
          <div className="card-body c-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.size}</p>
            <div className="crad-last">
            <span>${item.price}</span>
           
            <button  to="" className="btn btn-primary" onClick={()=>cart(item._id)} >AddtoCart</button>
            </div>
          </div>
        </div>
      
        </>)
})}
      </div>

    </>
  );
};

export default BuyArts;
