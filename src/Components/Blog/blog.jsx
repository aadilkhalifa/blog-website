import React from 'react'
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import Navbar2 from '../Navbar2/Navbar2'
import Footer from '../Footer/Footer'
import Card from '../Home/card.jsx'
import './blog.scss'
import ProfilePic from '../../Images/profile_pic2.jpg'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti'

function Blog({database}) {

    let { id } = useParams();
    console.log("id: "+id);
    console.log(typeof id);
    var data = database[id];

    var i = 0;
    var j = 1
    if(id==="0"){
        i=1;
        j=2;
    }
    if(id==="1"){
        i=0;
        j=2;
    }

    const [isFollowing, setisFollowing] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [id])
    
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

                    <button  
                    onClick={()=>{setisFollowing(!isFollowing)}}
                    className={`${isFollowing===true ? "active" : ""}`}
                    >
                        { !isFollowing ? "Follow" : "Following"}
                    </button>

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
                    <hr />
                    <h1>
                        {data.title}
                    </h1>
                    <p className="blogDetails" >
                        Oct 25 · 4 min read
                    </p>
                    {/* <img src={Image2} alt="" /> */}
                    <img src={data.image} alt="" />

                    <div className="blogBody">
                        {
                            data && data.paras.map( (i)=> <p key={i} >{i}</p> )
                        }
                    </div>
                    <hr />
                </div>
                <div className="blogLeftBar"></div>
            </div>
            <div className="similarDiv">
                <h3>Similar posts</h3>
                <span className="similarCardsDiv">
                    <Card data={database[i]} id={i} />
                    <Card data={database[j]} id={j} />
                </span>
            </div>
            <Footer/>
        </>
    )
}

export default Blog
