import React from 'react'
import '../style/enjoyable.scss'

export function Enjoyable() {
    return (
        <div className="enojoyable">

            <div className="one">
                <div className="small"></div>
                <div className="big"></div>
            </div>
            <div className="two">

                <pre className="main">{`
Enjoyable place
for all the family`}</pre>

                <pre className="desc">{`

Our relaxed surroundings make dining with us a
great experience for everyone. We can even
arrange a tour of the farm before your meal.
                `}</pre>
            </div>

        </div>
    )
}
