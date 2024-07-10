import React, { useEffect, useState } from "react";
import profile from "../assests/profile.png"; // assuming you meant 'assets' instead of 'assests'
import "./profile.css";
import axios from "axios";
import { Main_api } from "../apicalls/AllApiCalls";

const Profile = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const token = localStorage.getItem("authToken");

                const response = await axios.get(`${Main_api}/user/one/`, {
                    headers: {
                        authorization: token
                    }
                });
                console.log(response.data)
                setData(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                
            }
        };

        fetchData();
    }, []);

    return (
        <div className="pro">
            <div className="profileimage">
                <img src={profile} alt="Profile" />
            </div>
            <div className="profiledata">
                <b><h3 className="h3">  {data.name || 'Loading...'}</h3></b>
                <h3><b>Email :</b> {data.email}</h3>
                <span><b>Contact :</b></span><span>  {data.phone || 'Not available'}</span>
            </div>
        </div>
    );
};

export default Profile;
