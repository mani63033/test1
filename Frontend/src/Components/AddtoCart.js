import React from "react";

const AddtoCart = ({ item }) => {
  return (
    <div className="card" style={{ width: "18rem", height: "500px" }}>
      <img
        className="card-img-top"
        src={`http://192.168.29.100:8001${item.image}`}
        alt={item.name}
        style={{ height: "300px" }}
      />
      <div className="card-body c-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">{item.size}</p>
        <div className="card-last">
          <span>${item.price}</span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
