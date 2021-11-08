import './Navbar2.scss'

import React, { useState } from 'react';
import Logo from '../../Images/logoDark.svg'
import ProfilePic from '../../Images/profile_pic2.jpg'
import { Link } from "react-router-dom";

function Navbar2() {

    const [Active, setActive] = useState(1); 

    return (
        <div className="navbar2Div">
            <div className="navbarLeftDiv" >
                <Link to="../">
                    <img className="logo2" src={Logo} alt="" />
                </Link>
            </div>
            <div className="navbarCenterDiv">
                <Link to="#" onClick={()=>{setActive(1)}} className={`${Active===1 ? "active" : ""}`} >
                    Articles
                </Link>
                <Link to="#" onClick={()=>{setActive(2)}} className={`${Active===2 ? "active" : ""}`} >
                    Events
                </Link>
                <Link to="#" onClick={()=>{setActive(3)}} className={`${Active===3 ? "active" : ""}`} >
                    About
                </Link>
                <Link to="#" onClick={()=>{setActive(4)}} className={`${Active===4 ? "active" : ""}`} >
                    Contact
                </Link>
            </div>
            <div className="navbarRightDiv">
                <input type="text" placeholder="Search.."/>
                <img className="profilePic" src={ProfilePic} alt="" />
            </div>
        </div>
    )
}

export default Navbar2
