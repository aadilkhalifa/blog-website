import "./Contact.scss"

import React from 'react'
import Navbar2 from "../Navbar2/Navbar2"
import Footer from "../Footer/Footer"
import {BsEmojiSmileUpsideDown} from "react-icons/bs"

function Contact() {
    return (
        <div className="contactDiv">
            <Navbar2/>
            <div className="content">
                <p>
                    nothing to see here 
                </p>
                <BsEmojiSmileUpsideDown></BsEmojiSmileUpsideDown>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
