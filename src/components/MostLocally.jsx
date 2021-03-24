import React from 'react'
import '../style/mostlocally.scss'
import mostImg from '../assets/images/homepage/locally-sourced-desktop@2x.jpg'
export function MostLocally() {
    return (
        <div className="most-locally">
            <div className="info">
                <pre className="main">{`
The most locally 
sourced food`}</pre>
                <pre className="desc">{`
All our ingredients come directly from our farm
or local fishery. So you can be sure that you’re
eating the freshest, most sustainable food.
               `}</pre>
            </div>
            <div className="img-container">
                <div className="bg-div"></div>
                <img src={mostImg} alt="No photo" />
            </div>
        </div>
    )
}
