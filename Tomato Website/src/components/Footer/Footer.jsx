import React from 'react'
import "./Footer.css"
import { assets1 } from '../../assets/frontend_assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets1.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum magnam eaque delectus accusantium eos in voluptatum sint praesentium excepturi!
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets1.facebook_icon} alt="" />
                        <img src={assets1.twitter_icon} alt="" />
                        <img src={assets1.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-748-984-4530</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © Tomato.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer