import React, { useState } from "react"; // Import useState
import "./Login.css";
import cross_icon from "../../assets/cross_icon.png";
import { handleError, handleSuccess } from "../Error/Error";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';

function Login() {
  const { setShowAuth, setShowLogin , setShowSeller,server} = useContext(AppContext);
  const navigate = useNavigate();
  // Initialize state for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event
    setFormData({
      ...formData, // Keep the existing form data
      [name]: value, // Update only the changed field
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = `${server}/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setFormData({ email: "", password: "" });
        setTimeout(() => {
          setShowAuth(false);
          setShowSeller(false);
          navigate("/");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={submitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
          <img
            onClick={() => setShowAuth(false)}
            src={cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-input">
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email} // Bind the value to state
            onChange={changeHandler} // Add change handler
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password} // Bind the value to state
            onChange={changeHandler} // Add change handler
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <p>
          Create a new account?{" "}
          <span onClick={() => setShowLogin(false)}>Click here</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
