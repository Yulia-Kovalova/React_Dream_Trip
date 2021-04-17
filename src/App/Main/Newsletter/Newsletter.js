import React from 'react'

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Email newsletter</h1>
            <h6>Subscribe my Newsletter for new blog posts, tips & new photos. Let's stay updated!</h6>
            <form action="" className="newsletter-form">
                <div className="form-field">
                    <input type="text" name="" id="" placeholder="Your first name"/>
                </div>
                <div className="form-field">
                    <input type="text" name="" id="" placeholder="Your last name"/>
                </div>
                <div className="form-field">
                    <input type="text" name="" id="" placeholder="Your email adress"/>
                </div>
                <button className="form-button">Subscribe to newsletter</button>
            </form>
        </div>
    )
}

export default Newsletter