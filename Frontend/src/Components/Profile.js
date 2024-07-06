import React from "react";
import profile from "../assests/profile.png";
import "./profile.css";
const Profile=()=>
{
    return(
        <>
        <div className="pro">
            <div className="profileimage">
                <img src={profile} alt="error"/>
            </div>
            <div className="profiledata">
                <h3>Manikanta Tangudu</h3>
                <b>Contact:</b>&nbsp;<span>6303388146</span>
            </div>
        </div>
        </>
    )
}
export default Profile;