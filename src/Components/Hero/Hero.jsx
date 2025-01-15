import React from "react";
import "./Hero.css";
import hero from "../../assets/hero-2.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-section-left">
        <h1>HOSTEL STUFF</h1>
        <p>
          Find great deals on pre-owned hostel essentials, from furniture to
          study materials, and sell your unused items easily. Save money and
          reduce waste by giving items a second life
        </p>
        <a href="" className="hero-button"><button >Explore</button></a>
      </div>
      <div className="hero-sction right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
