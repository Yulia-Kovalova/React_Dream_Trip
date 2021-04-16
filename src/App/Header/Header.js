import React from 'react'

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row header-row">
                    <div className="col-xs-10 col-sm-2 col-md-2 col-lg-2">
                        <Logo/>
                    </div>
                    <div className="col-xs-2 col-sm-10 col-md-10 col-lg-10">
                        <Menu/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header