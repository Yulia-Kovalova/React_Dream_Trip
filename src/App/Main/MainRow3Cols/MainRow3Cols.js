import React from 'react'

import SidebarAuthor from './SidebarAuthor/SidebarAuthor'
import MostPopular from './MostPopular/MostPopular'
import Categories from './Categories/Categories'
import RecentComments from './RecentComments/RecentComments'
import Tags from './Tags/Tags'

const MainRow3Cols = () => {
    return (
        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <div className="row sidebar">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <SidebarAuthor/>
                </div>
            </div>
            <div className="row sidebar">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <MostPopular/>
                </div>
            </div>
            <div className="row sidebar">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Categories/>
                </div>
            </div>
            <div className="row sidebar">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <RecentComments/>
                </div>
            </div>
            <div className="row sidebar">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Tags/>
                </div>
            </div>
        </div>
    )
}

export default MainRow3Cols