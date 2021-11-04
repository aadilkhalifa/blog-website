import React from 'react'
import './home.scss'
import Navbar from '../Navbar/navbar'
import Card from './card'

function home() {
    return (
        <div>
            <Navbar/>
            <div className="featuredBlog">
                <div className="featuredTitleDiv">
                    <p className="featuredTitle">
                        How to Invest your Money in Latest Technologies
                    </p>
                    <p className="featuredSubTitle">
                        Read Article
                    </p>
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
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <h5 className="loadMore">
                            Load more articles..
                        </h5>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottomInside">
                    <span>
                        About
                    </span>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus possimus perferendis tenetur cumque quis ipsum quia aperiam laboriosam laudantium veniam, nulla iste hic quas corrupti consectetur, reiciendis excepturi cupiditate.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default home
