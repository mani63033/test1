import React, { useState } from 'react';
import axios from 'axios';
import "./signin.css";
import { Main_api } from '../apicalls/AllApiCalls';
import { useNavigate } from 'react-router';
const Signin = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: 0,
  });
  const [ErrorMessage,setError]=useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'phone' ? parseInt(value, 10) : value
    });
    setError(
      formData.phone<10?"Invalid PhoneNumber":""
    )
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await axios.post(`${Main_api}/user`, formData);
      console.log('Data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    setFormData(
      {
        name:"",
        email:"",
        password:"",
        phone:""
      }
    )
   
    navigate("/login");
  };

  return (
    <div className="container">
      <h2 className="heading">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="label">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <p>{ErrorMessage}</p>
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default Signin;
