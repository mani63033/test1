import React from "react";
import NavBar from "./Nav";
import i from "../assests/Group 3742 (1).png";
import { Link } from "react-router-dom";
const Arts=
    [
        {
            "_id": "668794fee793361630f5af9d",
            "name": "saikiran",
            "description": "wbfjbfbaigb",
            "size": "20X520",
            "price": 300,
            "Discount": 5,
            "Aboutart": "This painting is a city lover's dream",
            "Paintingdescription": "A bustling cityscape with bright lights and colors",
            "Termsandcondition": "No returns or refunds",
            "image": i,
            "user": 1,
            "__v": 0
        },
        {
            "_id": "668794fee793361630f5af9d",
            "name": "saikiran",
            "description": "wbfjbfbaigb",
            "size": "20X520",
            "price": 300,
            "Discount": 5,
            "Aboutart": "This painting is a city lover's dream",
            "Paintingdescription": "A bustling cityscape with bright lights and colors",
            "Termsandcondition": "No returns or refunds",
            "image": i,
            "user": 1,
            "__v": 0
        } ,
        {
            "_id": "668794fee793361630f5af9d",
            "name": "saikiran",
            "description": "wbfjbfbaigb",
            "size": "20X520",
            "price": 300,
            "Discount": 5,
            "Aboutart": "This painting is a city lover's dream",
            "Paintingdescription": "A bustling cityscape with bright lights and colors",
            "Termsandcondition": "No returns or refunds",
            "image": i,
            "user": 1,
            "__v": 0
        } 
    ]
const BuyArts=()=>
    {
       return( 
       <>
            {Arts.map((item)=>{
                return(
                    <div class="card" style={{width: "18rem"}}>
                    <img class="card-img-top" src={item.image} alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text">{item.description}</p>
                      <p className="card-text">{item.size}</p>  <span>{item.price}</span>
                      <Link to="" class="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>   
                )
            })}
        </>)
    }
export default BuyArts;