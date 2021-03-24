import React, { Component } from 'react'
import { itemService } from '../services/itemService'
import '../style/highlights.scss'
import { ItemsList } from './ItemsList'


export class HighLights extends Component {

    state = {
        items: null
    }
    componentDidMount() {
        itemService.getItems()
            .then(items => this.setState({ items }))
    }


    render() {
        const { items } = this.state
        if (!items) return <h5>Loading..</h5>
        return (
            <div className="highlights main-container">
                <div className="info">
                    <div className="desc">
                        <pre className="main">{`A few highlights
from our menu`}</pre>
                        <pre className="desc">{`
We cater for all dietary requirements, but here’s
a glimpse at some of our diner’s favourites. Our 
menu is revamped every season.`}</pre>

                    </div>
                    <div className="item-list">
                        <ItemsList items={items} />
                    </div>
                </div>
            </div>
        )
    }
}
