import React, { useEffect } from 'react'
import './Home.css'
import Services from '../../Components/Services/Services'
import Products from '../../Components/Products/Products'
import { useContext } from "react";
import { AppContext } from '../../Context/AppContext';
import Contact from '../../Components/Contact/Contact'
import Title from '../../Components/Title/Title'
import Test from '../../Components/Test/Test'
import Footer from '../../Components/Footer/Footer'

function Home() {

  const {setLoggedInUser} = useContext(AppContext);

  useEffect(()=> {
    setLoggedInUser(localStorage.getItem('loggedInUser')) ;
  },)

  return (
    <div className='home'>
        <Test/>
        <Services/>
        <Products/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home