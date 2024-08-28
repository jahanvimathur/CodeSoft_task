import React from 'react'
import './Header.css'
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <header>
      <i><a href="mailto:Jahanvimathur2004@gmail.com"><FaMailBulk /></a></i>
      <i><a href="tel:916367624163"><FaPhoneAlt /> </a></i>
        <p><FaMailBulk /> : Jahanvimathur@gmail.com</p>
        <p><FaPhoneAlt /> : 6367624163</p>
    </header>
  )
}

export default Header
