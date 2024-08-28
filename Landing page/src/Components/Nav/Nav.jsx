import React from 'react'
import './Nav.css'
import { CiMenuFries } from "react-icons/ci";

function Nav() {
  return (
    <nav>
        <img src="logo1.png" alt="" />
        <ul>
            <a href="" ><li >Home </li></a>       
            <a href=""><li>About </li></a>       
            <a href=""><li>Blog </li></a>       
            <a href="" ><li>Testonomial </li></a>       
            <a href=""><li>Contact Us</li></a> 
            <i><CiMenuFries/></i>
        </ul>
    </nav>
  )
}

export default Nav
