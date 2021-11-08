import './Footer.scss'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti'

import React from 'react'

function Footer() {
    return (
        <div className="footerDiv">
            <div className="optionsDiv">
                <a>Topics</a>
                <a>Events</a>
                <a>About</a>
                <a>Contact</a>
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
