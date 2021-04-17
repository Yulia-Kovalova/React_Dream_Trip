import React from 'react'

import author_pic from '../Image/author_pic.png'
import twitter from '../Image/twitter.png'
import pinterest from '../Image/pinterest.png'
import google_plus from '../Image/google_plus.png'
import instagram from '../Image/instagram.png'

const SidebarAuthor = () => {
    return (
        <div className="sidebar-author">
            <div className="author-pic-name">
                <div className="author-pic">
                    <img src={author_pic} alt="Author"/>
                </div>
                <div className="author-name">
                    <h3>Lizzie Rose</h3>
                    <h4>Traveller</h4>
                </div>
            </div>
            <div className="author-hi-words">
                <p>Hi, I'm Lizzie Rose. Travelling is the way I express my creative side to the world…</p>
            </div>
            <div className="author-icons">
                <div className="view-on">
                    <p>View on:</p>
                </div>
                <div className="icons">
                    <a href="/">
                        <img src={twitter} alt="Twitter"/>
                    </a>
                    <a href="/">
                        <img src={pinterest} alt="Pinterest"/>
                    </a>
                    <a href="/">
                        <img src={google_plus} alt="Google plus"/>
                    </a>
                    <a href="/">
                        <img src={instagram} alt="Instagram"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SidebarAuthor