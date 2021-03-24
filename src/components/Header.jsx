import React from 'react'
import '../style/header.scss'


export function Header() {
    return (
        <div className="header main-container">
            <h2>dine</h2>
            <div className="header-container">
                <pre className="main">
                    {`
Exquisite dining
since 1989
                `}
                </pre>
                <pre className="desc">
                    {`
Experience our seasonal menu in beautiful
country surroundings. Eat the freshest produce
from the comfort of our farmhouse.
                `}
                </pre>
                <button className="book-button"></button>
            </div>

        </div>
    )
}
