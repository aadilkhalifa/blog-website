import './card.scss'
import Image1 from '../../Images/image1.jpg'

import React from 'react'

function Card() {
    return (
        <div className="cardDiv">
            <div className="cardImgDiv">
                <img src={Image1} alt="" />
            </div>
            <div className="cardTitleDiv">
                <h5>
                    BUSINESS
                </h5>
                <h3>
                    How to improve your business
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugit natus et inventore id dolores architecto, molestiae suscipit molestias ipsum ab modi qui reprehenderit quos enim incidunt. Nihil, aliquam enim.
                </p>
                <h4>
                    Read
                </h4>
            </div>
        </div>
    )
}

export default Card
