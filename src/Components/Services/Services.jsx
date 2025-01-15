import React from "react";
import "./Services.css";
import service from "../../assets/service.png";
import hostel from "../../assets/hostel-leaving.jpg";

function Services() {
  return (
    <div className="service-container ">
      <div className="service-container-1 " id="about" >
        <p>our</p>
        <img src={service} alt="" />
      </div>
      <div className="service-container-2">
        <img src={hostel} alt="" />
        <div className="service-desc">
          This is a web-based platform designed to connect sellers and buyers of
          second-hand hostel essentials. The platform allows students and
          residents to easily resell and buy used items such as furniture,
          electronics, study materials, and other necessities. Sellers can
          register, add product details, including images, description, and
          price. Buyers can browse through the listings, view detailed
          descriptions of each product, and contact the seller directly for
          inquiries or purchase. The platform aims to make the process of buying
          and selling used items convenient and efficient, while fostering a
          sustainable way to reuse resources within the hostel community.
        </div>
      </div>
    </div>
  );
}

export default Services;
