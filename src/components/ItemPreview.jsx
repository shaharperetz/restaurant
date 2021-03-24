import React from 'react'
export function ItemPreview({ item: { path, title, desc }, idx }) {
    const img = require(`../assets/images/homepage/menu-items/menu-item${idx + 1}.jpg`)
    return (
        <div className="item-preview">
            <img src={img.default} alt="NO" />
            <div className="line"></div>

            <div className="item-preview-info">
                <p className="main">
                    {title}
                </p>
                <p className="desc">{desc}</p>
            </div>
        </div>
    )
}
