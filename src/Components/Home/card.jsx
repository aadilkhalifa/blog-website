import './card.scss'
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi'

import React from 'react'

function Card( {data, id} ) {
    return (
        <div className="cardDiv">
            <div className="cardImgDiv">
                {/* <img src={Image1} alt="" /> */}
                <img src={data.image} alt="" />
            </div>
            <div className="cardTitleDiv">
                <h5>
                    {data.topic}
                </h5>
                <Link to={`${"../blog/"+id}`} >
                    <h3 className="cardTitle">
                        {/* How to improve your business */}
                        {data.title}
                    </h3>
                </Link>
                <div className="descDiv">
                    <p>
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit natus et inventore id dolores architecto, molestiae suscipit molestias ipsum ab modi qui reprehenderit quos enim incidunt. Nihil, aliquam enim. */}
                        {data.paras[0]}
                    </p>
                </div>
                <div className="readDiv">
                    <Link to={`${"../blog/"+id}`} className="readLink">
                        Read 
                    </Link>
                    <HiArrowNarrowRight></HiArrowNarrowRight>
                </div>
            </div>
        </div>
    )
}

export default Card
