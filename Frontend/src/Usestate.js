import React from "react";
import img from "./assests/Group 3742 (1).png";

const Cart = () => {
    const a = [1, 2, 3, 3, 4,78,88];
    let len = a.length;
    return (
        <div style={{ position: "relative", display: "inline-block", marginTop: "300px", marginLeft: "200px" }}>
            <img src={img} style={{ borderRadius: "50%", width: "50px" }} alt="Round" />
            <span style={{
                position: "absolute",
                top: "0",
                right: "0",
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 5px",
                fontSize: "12px"
            }}>{len}</span>
        </div>
    );
};

export default Cart;
