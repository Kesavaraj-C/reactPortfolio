import React from 'react';
import './Home.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import About from '../About/About';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const sticky = navbar.offsetTop;

      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     <nav className="nav_container" >
            <h2 className="nav_logo">Kesavaraj</h2>
            <div className="nav_list" >
                <li className="nav_options">Home</li>
                <li className="nav_options">About</li>
                <li className="nav_options">Service</li>
                <li className="nav_options">Work</li>
                <li className="nav_options">Blog</li>
                <li className="nav_options">Contact</li>
            </div>
        </nav>
    <div className="home_container">
      <div className="home_display">
       
        <div className="home_content">
          <h2>HELLO</h2>
          <h1>I AM DEVELOPER</h1>
          <div className="home_logo">
            <li> <FaFacebookF className='home_logoSize' /></li>
            <li><FaTwitter className='home_logoSize' /></li>
            <li><FaLinkedinIn className='home_logoSize'/></li>
            <li><FaBehance className='home_logoSize'/></li>
            <li><TfiYoutube className='home_logoSize'/></li>
          </div>
        </div>
      </div>
    </div>
    </> 
    
  )
}

export default Home