import React from 'react'
import '../style/family.scss'
import familyImg from '../assets/images/homepage/family-gathering-desktop.jpg'

export function Family() {
    return (
        <div className="family">
            <div className="family-inside-conainter">
                <img src={familyImg} alt="" />
                <div className="family-details">
                    <p className="main">Family Gathering</p>
                    <pre className="desc">{`
We love catering for entire families. So please
bring everyone along for a special meal with
your loved ones. We’ll provide a memorable
experience for all.
        `}</pre>

                    <button className="book-button"></button>

                    <p className="black">FAMILY GATHERING</p>
                    <p className="grey">SPECIAL EVENTS</p>
                    <p className="grey">SOCIAL EVENTS</p>

                </div>
            </div>
        </div>
    )
}
