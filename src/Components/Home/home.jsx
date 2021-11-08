import React from 'react'
import './home.scss'
import Navbar from '../Navbar/navbar'
import Card from './card'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function home({database}) {
    return (
        <div>
            <Navbar/>
            <div className="featuredBlog">
                <div className="featuredTitleDiv">
                    <Link to="./blog/0" className="featuredTitle">
                        {database[0].title}
                    </Link>
                    <Link to="./blog/0" className="featuredSubTitle">
                        Read Article
                    </Link>
                </div>
            </div>
            <div className="content">
                <div className="contentRow">
                    {
                        false ? null :
                    <div className="leftBar">
                        <h2>
                            Top News
                        </h2>
                        <h3>Archive </h3>
                        <p>2021</p>
                        <p>2020</p>
                        <p>2019</p>
                        <p>2018</p>
                    </div>
                    }
                    <div>
                        <div className="cardsDiv">
                            <Card data = {database[1]} id = {1} />
                            <Card data = {database[2]} id = {2} />
                            <Card data = {database[3]} id = {3} />
                            <Card data = {database[4]} id = {4} />
                            <Card data = {database[5]} id = {5} />
                        </div>
                        <h5 className="loadMore">
                            No more articles :)
                        </h5>
                    </div>
                </div>
            </div>
            {/* <div className="bottom">
                <div className="bottomInside">
                    <span>
                        About
                    </span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus possimus perferendis tenetur cumque quis ipsum quia aperiam laboriosam laudantium veniam, nulla iste hic quas corrupti consectetur, reiciendis excepturi cupiditate.
                    </p>
                </div>
            </div> */}
            <Footer/>
        </div>
    )
}

export default home
