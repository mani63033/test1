import React, { useEffect, useRef, useState } from "react";
import NavBar from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Main_api } from "../apicalls/AllApiCalls";
import AddtoCart from "./AddtoCart";
const Carts = () => {
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
  
  
          let res = await axios.get(`${Main_api}/product/cart/${userid}`, {
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
    <div >
      {arts.map((item) => {
        return (
      <>
        <div  className="flex justify-between mb-[10%]" key={item.id}>
        <Link to={`/product/${item._id}`}>
          <img
            className="w-2/3 ml-[20%]"
            src={`${Main_api}${item.image}`}
            alt="Card image cap" style={{height:"300px"}} /> </Link>
          <div className="mr-[30%]">
            <h5 className="mb-[1%]">{item.name}</h5>
            <p className="mb-[1%]">{item.description}</p>
            <p className="mb-[1%]">{item.size}</p>
            <div className="mb-[1%]">
            <span>${item.price}</span>
            </div>
          </div>
        </div>
      
        </>)
})}
      </div>
        <button className="btn btn-primary" style={{marginLeft:"60%"}}>Buy Now</button>
    </>
  );
};

export default Carts;
