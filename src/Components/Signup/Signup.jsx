import React, { useState } from "react";
import "./Signup.css";
import cross_icon from "../../assets/cross_icon.png";
import { handleError, handleSuccess } from "../Error/Error";
import Login from "../Login/Login";
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';

function Signup() {
  const { showAuth, setShowAuth, showLogin, setShowLogin,server } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event
    setFormData((prevData) => ({
      ...prevData, // Keep the existing form data
      [name]: value, // Update only the changed field
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = `${server}/auth/register`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setFormData({ name: "", email: "", password: "" }); // Reset form data
        setTimeout(() => {
          setShowLogin(true);
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      {showLogin ? (
        <Login setShowAuth={setShowAuth} setShowLogin={setShowLogin} showAuth={showAuth} />
      ) : (
        <div className="login-popup">
          <form onSubmit={submitHandler} className="login-popup-container">
            <div className="login-popup-title">
              <h2>Sign up</h2>
              <img onClick={() => setShowAuth(false)} src={cross_icon} alt="Close" />
            </div>
            <div className="login-popup-input">
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name} // Controlled component
                onChange={changeHandler} // Bind change handler
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email} // Controlled component
                onChange={changeHandler} // Bind change handler
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password} // Controlled component
                onChange={changeHandler} // Bind change handler
                required
              />
            </div>
            <button type="submit">Sign up</button>
            <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            <p>
              Already have an account?{" "}
              <span onClick={() => setShowLogin(true)}>
                Click here
              </span>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default Signup;
