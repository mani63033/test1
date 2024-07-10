import React from "react";
import Product from "./product";
import "./buy.css"
const Buynow=()=>{
    return(
        <>
        <div className=" backdrop-brightness-50  bg-black/30" style={{marginTop:"-3.6%"}}>
        <div className="opacity-40">
            <Product/>
        </div>
        <div className="form-container active backdrop-opacity-60" style={{marginTop:"-15%"}}>
      <h2>Delivery Address</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" name="pincode" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required />
        </div>
        <button type="submit" id="button">Submit</button>
      </form>
    </div>
    </div>
        </>
    )
}
export default Buynow