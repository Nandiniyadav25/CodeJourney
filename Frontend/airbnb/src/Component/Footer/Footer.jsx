import React from 'react'
import './Footer.css'
import { Link } from 'react-router';

function Footer() {
  return (
    <div id='footer'>
        <div className="footertop">
            <div className="box">
                <span id="contact1">Contact Us</span>
                <span>+91000000000</span>
                <span>abc123@gmail.com</span>
                <span>Address,city/India</span>
            </div>
            <div className="box">
                <span id='services'>Our Services</span>
                <span>Home</span>
                <span>Add</span>
                <span>Rent</span>
            </div>
            <div className="box">
                <span id='Quick'>Quick Link</span>
                <span>Knowledge Base</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
            <div className="box">
                <span id='logo'>PropRent</span>
                <Link to={"/contact"}><button>Contact Us</button></Link>
            </div>
        </div>
        <div className="footerbottom">
            <span>Privacy Policy</span>
            <span>Use of terms</span>
        </div>
    </div>
  )
}

export default Footer