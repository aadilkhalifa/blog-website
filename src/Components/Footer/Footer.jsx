import './Footer.scss'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti'
import Logo from '../../Images/icon.png'

import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footerDiv">
            <Link to="/home">
                <img src={Logo} alt="" />
            </Link>
            <div className="optionsDiv">
                <Link to="/home">Articles</Link>
                <Link to="/events">Events</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="socialIcons">
                <TiSocialLinkedinCircular size="2em" />
                <TiSocialTwitterCircular size="2em" />
                <TiSocialFacebookCircular size="2em" />
            </div>
        </div>
    )
}

export default Footer
