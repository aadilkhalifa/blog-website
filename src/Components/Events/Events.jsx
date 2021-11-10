import "./Events.scss"

import React from 'react'
import Navbar2 from "../Navbar2/Navbar2"
import Footer from "../Footer/Footer"
import {BsEmojiFrown} from "react-icons/bs"

function Events() {
    return (
        <div className="eventsDiv">
            <Navbar2/>
            <div className="content">
                <span>
                    <p>
                        No events to show 
                    </p>
                    <BsEmojiFrown></BsEmojiFrown>
                </span>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Events
