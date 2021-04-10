import React from 'react'

const Header = () => {
    return (
        <header class="header">
            <div class="container">
                <div class="row header-row">
                    <div class="col-xs-10 col-sm-2 col-md-2 col-lg-2">
                        <div class="logo">
                            <a href="#">
                                <img src="images/logo.png" alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-xs-2 col-sm-10 col-md-10 col-lg-10">
                        <div class="menu navigation hidden-menu">
                            <div class="submenu">Home</div>
                            <div class="submenu">Posts</div>
                            <div class="submenu">Recipes</div>
                            <div class="submenu">About me</div>
                            <div class="submenu">Article</div>
                            <div class="submenu">Contact</div>
                            <div class="submenu">Purchase</div>
                        </div>
                        <div class="menu-mobile-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header