import axios from "axios";
import React, { useEffect, useState } from "react";
import { Main_api } from "../apicalls/AllApiCalls";
import { useNavigate, useParams } from "react-router";

const Product = () => {
  const [data, setData] = useState([]); 
  const token=localStorage.getItem("authToken")
  const navigate=useNavigate()
  const {id}=useParams();
  useEffect(() => {
    const fetchData = async () => {       
      try {
        const response = await axios.get(`${Main_api}/product/${id}`,{
            headers: {
              authorization:token
            }});
        setData(response.data); 
        console.log(response.data); 
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData(); 
  }, []); 
  const buy=()=>{
    navigate("/buynow")
  }
  return (
    <>
      <div className="flex justify-around">
        <div>
            <img src={`http://192.168.29.100:8001${data.image}`} className="w-2/3 ml-[10%]"  />
        </div>
        <div className="mr-[10%] w-2/3 pt-[2%] tracking-tight leading-relaxed">
            <h2 className="mb-[1%]"><b>Name:</b>{data.name}</h2>
            <h2 className="mb-[1%]"><b>Description:</b>{data.description}</h2>
            <h2 className="mb-[1%]"><b>Size:</b>{data.size}</h2>
            <h2 className="mb-[1%]"><b>Cost:</b>{data.price}</h2>
            <h2 className="mb-[1%]"><b>Discount:</b>{data.Discount}</h2>
            <button className="btn btn-primary" onClick={buy}>Buy Now</button>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Product;
