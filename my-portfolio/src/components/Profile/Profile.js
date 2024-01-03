import Typography from "@mui/material/Typography";
import React from "react";
import "./Profile.css";
import profilePhoto from "../../assets/images/profile_photo.jpg";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Savas Pamuk</Typography>
        <Typography className="title">Web Developer</Typography>
      </div>
      <figure className="profile_image">
        <img src={profilePhoto} alt="Profile" />
      </figure>
      <div className="profile_information">
        Timeline
        <br />
        <button>Download CV</button>
      </div>
    </div>
  );
};

export default Profile;
