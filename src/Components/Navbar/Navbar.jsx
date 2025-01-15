import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import user from '../../assets/user.png'

function Navbar() {
  const [nav, setNav] = useState("home");
  const {setShowAuth,showSeller,loggedInUser,setShowAdmin} = useContext(AppContext);

  const PrivateRoute = ({element}) => {
    return isauth ? element : <Navigate to='/home' />
  } 

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='navbar-right'>
        <a
          onClick={() => setNav("home")}
          className={`navbar-item ${nav === 'home' ? 'active' : ''}`}
          href='#hero'
        >
          Home
        </a>
        <a
          onClick={() => setNav("about")}
          className={`navbar-item ${nav === 'about' ? 'active' : ''}`}
          href='#about'
        >
          About
        </a>
        <a
          onClick={() => setNav("product")}
          className={`navbar-item ${nav === 'product' ? 'active' : ''}`}
          href='#product'
        >
          Products
        </a>
        <a
          onClick={() => setNav("contact")}
          className={`navbar-item ${nav === 'contact' ? 'active' : ''}`}
          href='#contact'
        >
          Contact
        </a>
        {
          showSeller ?  <button className='seller' onClick={() => setShowAuth(true)}>Seller</button> : 
          <div className='user'>
            <img className='user-image' onClick={() => setShowAdmin(prev => !prev)} src={user}/>
            <p>{loggedInUser}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default Navbar;
