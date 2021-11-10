import "./About.scss"

import React from 'react'
import Navbar2 from "../Navbar2/Navbar2"
import Footer from "../Footer/Footer"

function About() {
    return (
        <div className="aboutDiv">
            <Navbar2/>
            <div className="content2">
                <p>
                    This is a blog website built using React. 
                </p>
                <p>
                    Link to <a href="https://github.com/aadilkhalifa/blog-website" target="_blank">source code</a>.
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default About 
