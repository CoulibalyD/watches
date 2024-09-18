import React from 'react'
import "./Navbar.css"
import dark_logo from "../Assets/black_logo.png"
import light_logo from "../Assets/white_logo.png"
import dark_bar from "../Assets/dark_bar.png"
import light_bar from "../Assets/white_bar.png"
import dark_user from "../Assets/dark_user.png"
import light_user from "../Assets/white_user.png"
import summer_dark from "../Assets/Crescent.png"
import summer_light from "../Assets/sun.png"
import dark_cart from "../Assets/cartShopping_dark.png"
import light_cart from "../Assets/cartShopping_light.png"
import { useState } from 'react'

const Navbar = ({ mode, setMode }) => {  // Destructure correctly here
  const [menu, setMenu] = useState("home");

  function theme() {
      setMode(mode === "light" ? "dark" : "light");  // Correctly call setMode
  }
  //add function for reponsive navbar
  return (
    <nav>
      <a href="#" className='logo'><img src={mode==='light'?dark_logo:light_logo} alt="" /></a>
      <img src={mode==="light"?dark_bar:light_bar} alt="" id='bars'/>
      <div className="all-icon-nav">
        <div className="navbars">
          <div className='links'>
              <ul> 
                <li onClick={()=>setMenu("home")}> Home{menu==="home"?<hr/>:<></>}</li >
                <li  onClick={()=>setMenu("men")}> Men{menu==="men"?<hr/>:<></>}</li >
                <li onClick={()=>setMenu("women")} > Women{menu==="women"?<hr/>:<></>}</li >
                <li  onClick={()=>setMenu("contact")}> Contact{menu==="contact"?<hr/>:<></>}</li>
              </ul>
          </div>
        </div>
        <div>
          <img className='img' src={mode==="light"?dark_user:light_user} alt="" />
          <img className='img' onClick={theme} src={mode === "light" ? summer_dark:summer_light} alt="Theme Toggle Icon" />
          <span className="crt">
            <img className='img cart' src={mode==="light"?dark_cart:light_cart} alt="" />
              <div className="crt-bt"></div>
            </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar