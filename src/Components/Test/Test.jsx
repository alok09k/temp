import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Test.css";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero-2.jpg";
import user from "../../assets/user.png";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";


function Test() {
  const [nav, setNav] = useState("home");
  const { setShowAuth, showSeller,setShowSeller, loggedInUser, setShowAdmin,dropdownMenu, setDropdownMenu } = useContext(AppContext);

  const navigate = useNavigate();

  function clickHandler () 
  {
      localStorage.removeItem('token');
      localStorage.removeItem('logedInUser');
      handleSuccess('Logout Successfully');
      setShowSeller(true);
  }

  return (
    <div className="home">
      <div className="home-1">
        <div className="home-1-left">
          <img src={logo} alt="" />
        </div>
        <div className="home-1-right">
          <a
            onClick={() => setNav("home")}
            className={`navbar-item ${nav === "home" ? "active" : ""}`}
            href="#hero"
          >
            Home
          </a>
          <a
            onClick={() => setNav("about")}
            className={`navbar-item ${nav === "about" ? "active" : ""}`}
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => setNav("product")}
            className={`navbar-item ${nav === "product" ? "active" : ""}`}
            href="#product"
          >
            Products
          </a>
          <a
            onClick={() => setNav("contact")}
            className={`navbar-item ${nav === "contact" ? "active" : ""}`}
            href="#contact"
          >
            Contact
          </a>
          {showSeller ? (
            <button className="seller" onClick={() => setShowAuth(true)}>
              Seller
            </button>
          ) : (
            <div className="user">
              <img
                className="user-image"
                onClick={() => setDropdownMenu(!dropdownMenu)} 
                src={user}
              />
              <p>{loggedInUser}</p>
            </div>
          )}
          {dropdownMenu && (
            <div className="navbar_right_accountmenu">
              <Link onClick={() => setShowAdmin(prev => !prev)} >Add Product</Link>
              <Link onClick={clickHandler} >Log out</Link>
            </div>
          )}
        </div>
      </div>

      <div className="home-2">
        <div className="home-2-left">
          <h1>HOSTEL STUFF</h1>
          <p>
            Find great deals on pre-owned hostel essentials, from furniture to
            study materials, and sell your unused items easily. Save money and
            reduce waste by giving items a second life
          </p>
          <a href="" className="hero-button">
            <button>Explore</button>
          </a>
        </div>
        <div className="home-2-right">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Test;
