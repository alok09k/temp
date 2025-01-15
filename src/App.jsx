import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Route as well
import Home from "./Pages/Home/Home";
import Signup from './Components/Signup/Signup';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';
import Admin from "./Components/Admin/Admin";



function App() {

  const { showAuth ,showAdmin} = useContext(AppContext);

  return (
    <>
      {showAuth && <Signup />}
      { showAdmin && <Admin/>}
      <Routes >
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
