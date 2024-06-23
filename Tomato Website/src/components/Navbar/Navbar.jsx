import React, { useState } from 'react'
import './Navbar.css'
import { assets1 } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const navigate = useNavigate();

    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        console.log("working");
        navigate("/")
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets1.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets1.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to="/cart" ><img src={assets1.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>:<div className='navbar-profile'>
                <img src={assets1.profile_icon} alt="" />
                <ul className='nav-profile-dropdown'>
                    <li><img onClick={()=>navigate('/myorders')} src={assets1.bag_icon} alt="" />
                    <p onClick={()=>navigate('/myorders')}>Orders</p>
                    </li>
                    <hr />
                    <li onClick={logout}><img src={assets1.logout_icon}alt="" />
                    <p onClick={logout}>LogOut</p>
                    </li>
                </ul>
                </div>}
            
        </div>
    </div>
  )
}

export default Navbar