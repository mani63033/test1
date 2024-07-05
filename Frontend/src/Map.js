import React, { useState } from "react";
import i from "./assests/Group 3742.png";
import ii from "./assests/Group 3742 (1).png";
import iii from "./assests/sakarias-armchair-black-sporda-dark-gray__0729767_pe737131_s5_adobespark.png";
import b1 from "./assests/B1.jpg";
import s1 from "./assests/Group 172.png";
import Cart from "./cart";
import { Router} from "react-router";

const m = {
    chair: {
      img1: [i, ii, iii]
    },
    beds: {
      b1: [b1, b1, b1]
    },
    sofa: {
      s: [s1, s1, s1]
    }
  };
  
  const Mapp = () => {
    const [images, setImg] = useState(m.chair.img1);
    const [cart, setCart] = useState([]);
  
    const changeImage = () => {
      setImg(m.beds.b1);
    };
  
    const sofa = () => {
      setImg(m.sofa.s);
    };
  
    const chair = () => {
      setImg(m.chair.img1);
    };
  
    const addToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
      console.log(item);
    };
  
    return (
      <>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {images.map((item, index) => {
            return <div className="card" style={{ width: "18rem", margin: "10px" }} key={index}>
              <img className="card-img-top" src={item} alt={`Card image ${index}`} />
              <div className="card-body">
                <p className="card-text">{`Image ${index + 1}`}</p>
              </div>
              <div>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
  })}
        </div>
        <div>
          <button onClick={chair}>Chairs</button>
          <button onClick={changeImage}>Beds</button>
          <button onClick={sofa}>Sofa</button>
        </div>
        <div>
        <Cart cart={cart} />
        </div>
      </>
    );
  };
  
  export default Mapp;
