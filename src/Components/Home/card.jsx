import './card.scss'
import Image1 from '../../Images/image1.jpg'
import { Link } from 'react-router-dom';

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
                <Link to={`${"./blog/"+id}`} >
                    <h3 className="cardTitle">
                        {/* How to improve your business */}
                        {data.title}
                    </h3>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit natus et inventore id dolores architecto, molestiae suscipit molestias ipsum ab modi qui reprehenderit quos enim incidunt. Nihil, aliquam enim.
                </p>
                <div className="readDiv">
                    <Link className="readLink" to='/blog'>
                        Read
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
