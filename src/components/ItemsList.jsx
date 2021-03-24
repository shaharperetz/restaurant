import React from 'react'
import { ItemPreview } from './ItemPreview'

export function ItemsList({ items }) {
    return (
        <div className="item-list-container">
            {items.map((item, idx) => <ItemPreview item={item} idx={idx} key={item.title} />)}
        </div>
    )
}
