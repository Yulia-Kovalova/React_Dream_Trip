import React from 'react'

import most_popular_1 from '../Image/most_popular_1.png'
import most_popular_2 from '../Image/most_popular_2.png'
import most_popular_3 from '../Image/most_popular_3.png'

const MostPopular = () => {
    return (
        <div className="most-popular">
            <h2>most popular</h2>
            <div className="most-popular-item">
                <img src={most_popular_1} alt="Most popular 1"/>
                <h4>One of Saturn’s largest rings may be newer than anyone</h4>
            </div>
            <div className="most-popular-item">
                <img src={most_popular_2} alt="Most popular 2"/>
                <h4>One of Saturn’s largest rings may be newer than anyone</h4>
            </div>
            <div className="most-popular-item">
                <img src={most_popular_3} alt="Most popular 3"/>
                <h4>One of Saturn’s largest rings may be newer than anyone</h4>
            </div>
        </div>
    )
}

export default MostPopular