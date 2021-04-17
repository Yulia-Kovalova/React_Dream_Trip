import React from 'react'
import AboutMainHero from './AboutMainHero/AboutMainHero'
import MainRow3Cols from './MainRow3Cols/MainRow3Cols'
import MainRow9Cols from './MainRow9Cols/MainRow9Cols'
import FollowAndSlider from './FollowAndSlider/FollowAndSlider'
import Newsletter from './Newsletter/Newsletter'

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <AboutMainHero/>
                    </div>
                </div>
                <div className="row main-row-9-3-cols">
                    <MainRow9Cols/>
                    <MainRow3Cols/>
                </div>
                <div className="row follow-and-slider">
                    <FollowAndSlider/>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Newsletter/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main