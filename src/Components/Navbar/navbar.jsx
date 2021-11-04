import "./navbar.scss"
import Logo from '../../Images/logo.svg'
import ProfilePic from '../../Images/profile_pic.jpeg'

import React from 'react'

function Navbar() {
    return (
        <div className="navbarDiv">
            <img className="logo" src={Logo} alt="" />
            <img className="profilePic" src={ProfilePic} alt="" />
            
        </div>
    )
}

export default Navbar
