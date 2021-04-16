import React from 'react'

import main_hero from './main_hero.png'

const AboutMainHero = () => {
    return (
        <div className="about-main-hero">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div className="about-main-hero-picture">
                    <img src={main_hero} alt="Main Hero"/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div className="about-main-hero-info">
                    <div className="about-main-hero-info-head">
                        <h3>travelling</h3>
                    </div>
                    <div className="about-main-hero-info-body">
                        <h4>How to increase your productivity with a Music</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                        <h6>Posted by Eugenia, on July  24, 2019</h6>
                    </div>
                    <div className="category">
                        <p>Category: 
                            <a href="/">Stories</a>
                        </p>
                    </div>
                    <button className="about-main-hero-button">Continue reading</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMainHero