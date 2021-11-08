import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import Navbar2 from '../Navbar2/Navbar2'
import Footer from '../Footer/Footer'
import './blog.scss'
import Image2 from '../../Images/image2.jpg'
import ProfilePic from '../../Images/profile_pic2.jpg'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti'

function Blog({database}) {

    let { id } = useParams();
    console.log("id: "+id);
    var data = database[id];
    
    return (

        <>
            <Navbar2></Navbar2>
            <div className="layout">
                <div className="blogLeftBar">
                    <div className="imageNameDiv">
                        <div className="imgDiv">
                            <img src={ProfilePic} alt="" />
                        </div>
                        <div className="nameDiv">
                            <h4>
                                Emily Ryese
                            </h4>
                            <p>
                                Chief Marketing Officer at Zoom
                            </p>
                        </div>
                    </div>

                    <button>Follow</button>

                    <div className="socialIcons">
                        <TiSocialLinkedinCircular size="2em" />
                        <TiSocialTwitterCircular size="2em" />
                        <TiSocialFacebookCircular size="2em" />
                    </div>
                </div>
                <div className="blogContent">
                    <h4 className="tags">
                        {data.topic}
                    </h4>
                    <h1>
                        {data.title}
                    </h1>
                    <p className="blogDetails" >
                        Oct 25 · 4 min read
                    </p>
                    {/* <img src={Image2} alt="" /> */}
                    <img src={data.image} alt="" />

                    <span className="blogBody">
                        {
                            data && data.paras.map( (i)=> <p key={i} >{i}</p> )
                        }
                    </span>
                </div>
                <div className="blogLeftBar"></div>
            </div>
            <Footer/>
        </>
    )
}

export default Blog
