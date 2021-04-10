import React from 'react'

import './reset.css'
import './style.css'

const App = () => {
    return (
        <>
            <header class="header">
                <div class="container">
                    <div class="row header-row">
                        <div class="col-xs-10 col-sm-2 col-md-2 col-lg-2">
                            <div class="logo">
                                <a href="#">
                                    <img src="images/logo.png" alt="Logo">
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
            <main class="main">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="about-main-hero">
                                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                    <div class="about-main-hero-picture">
                                        <img src="images/main_hero.png" alt="Main Hero">
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                    <div class="about-main-hero-info">
                                        <div class="about-main-hero-info-head">
                                            <h3>travelling</h3>
                                        </div>
                                        <div class="about-main-hero-info-body">
                                            <h4>How to increase your productivity with a Music</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                            <h6>Posted by Eugenia, on July  24, 2019</h6>
                                        </div>
                                        <div class="category">
                                            <p>Category: 
                                                <a href="#">Stories</a>
                                            </p>
                                        </div>
                                        <button class="about-main-hero-button">Continue reading</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row main-row-9-3-cols">
                        <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                            <div class="row article-items">
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/bridge_1.png" alt="Bridge 1">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>bridge</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Bridges</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/water.png" alt="Water">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>water</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Water</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/bridge_2.png" alt="Bridge 2">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>bridge</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Bridges</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row article-items">
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/forest_1.png" alt="Forest 1">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>forest</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Forest</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/forest_2.png" alt="Forest 2">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>forest</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Forest</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/nature.png" alt="Nature">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>nature</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Nature</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row article-items">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/travelling_lake.png" alt="Travelling Lake">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>travelling | lake</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Categories: 
                                                    <a href="#">Travelling, </a>
                                                    <a href="#">Lake</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row article-items">
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/nature_park.png" alt="Nature Park">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>nature | park</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Nature, </a>
                                                    <a href="#">Park</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/nature_picture.png" alt="Nature Picture">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>nature | picture</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Nature, </a>
                                                    <a href="#">Picture</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div class="article-item">
                                        <div class="article-item-picture">
                                            <img src="images/nature_forest.png" alt="Nature Forest">
                                        </div>
                                        <div class="article-item-body">
                                            <div class="article-item-text">
                                                <h3>nature | forest</h3>
                                                <h4>How to increase your productivity with a Music</h4>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…</p>
                                                <h6>Posted by Eugenia, on July  24, 2019</h6>
                                            </div>
                                            <div class="category">
                                                <p>Category: 
                                                    <a href="#">Nature, </a>
                                                    <a href="#">Forest</a>
                                                </p>
                                            </div>
                                            <button class="button">Continue reading</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <div class="row sidebar">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="sidebar-author">
                                        <div class="author-pic-name">
                                            <div class="author-pic">
                                                <img src="images/author_pic.png" alt="Author picture">
                                            </div>
                                            <div class="author-name">
                                                <h3>Lizzie Rose</h3>
                                                <h4>Traveller</h4>
                                            </div>
                                        </div>
                                        <div class="author-hi-words">
                                            <p>Hi, I'm Lizzie Rose. Travelling is the way I express my creative side to the world…</p>
                                        </div>
                                        <div class="author-icons">
                                            <div class="view-on">
                                                <p>View on:</p>
                                            </div>
                                            <div class="icons">
                                                <a href="#">
                                                    <img src="images/twitter.png" alt="Twitter">
                                                </a>
                                                <a href="#">
                                                    <img src="images/pinterest.png" alt="Pinterest">
                                                </a>
                                                <a href="#">
                                                    <img src="images/google_plus.png" alt="Google plus">
                                                </a>
                                                <a href="#">
                                                    <img src="images/instagram.png" alt="Instagram">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sidebar">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="most-popular">
                                        <h2>most popular</h2>
                                        <div class="most-popular-item">
                                            <img src="images/most_popular_1.png" alt="Most popular 1">
                                            <h4>One of Saturn’s largest rings may be newer than anyone</h4>
                                        </div>
                                        <div class="most-popular-item">
                                            <img src="images/most_popular_2.png" alt="Most popular 2">
                                            <h4>One of Saturn’s largest rings may be newer than anyone</h4>
                                        </div>
                                        <div class="most-popular-item">
                                            <img src="images/most_popular_3.png" alt="Most popular 3">
                                            <h4>One of Saturn’s largest rings may be newer than anyone</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sidebar">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="categories">
                                        <h2>categories</h2>
                                        <div class="category-item">
                                            <div></div>
                                            <a href="#">Bridges</a>
                                        </div>
                                        <div class="category-item">
                                            <div></div>
                                            <a href="#">Water</a>
                                        </div>
                                        <div class="category-item">
                                            <div></div>
                                            <a href="#">Forest</a>
                                        </div>
                                        <div class="category-item">
                                            <div></div>
                                            <a href="#">Nature</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row sidebar">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="recent-comments">
                                        <h2>recent comments</h2>
                                        <p><span>Movia Karla</span> on <span>Travelling trips</span> – Stop The World I Wanna Get Off With You – Soundcloud Post</p>
                                        <p><span>Movia Karla</span> on <span>Travelling trips</span> – Stop The World I Wanna Get Off With You – Soundcloud Post</p>
                                        <p><span>Movia Karla</span> on <span>Travelling trips</span> – Stop The World I Wanna Get Off With You – Soundcloud Post</p>
                                        <p><span>Movia Karla</span> on <span>Travelling trips</span> – Stop The World I Wanna Get Off With You – Soundcloud Post</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row sidebar">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="tegs">
                                        <h2>tegs</h2>
                                        <div class="tegs-items">
                                            <div>Minimal</div>
                                            <div>Ceremony</div>
                                            <div>Art</div>
                                            <div>Culture</div>
                                            <div>Fashion</div>
                                            <div>Seo</div>
                                            <div>Trend</div>
                                            <div>Interior</div>
                                            <div>Clean</div>
                                            <div>Minimal</div>
                                            <div>Social media</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row follow-and-slider">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="follow-on-instagram">
                                <a href="#">follow on instagram</a>
                            </div>
                            <div class="slider-block">
                                <div>
                                    <img src="images/slide1.png" alt="slide1">
                                </div>
                                <div>
                                    <img src="images/slide2.png" alt="slide2">
                                </div>
                                <div>
                                    <img src="images/slide3.png" alt="slide3">
                                </div>
                                <div>
                                    <img src="images/slide4.png" alt="slide4">
                                </div>
                                <div>
                                    <img src="images/slide5.png" alt="slide5">
                                </div>
                                <div>
                                    <img src="images/slide6.png" alt="slide6">
                                </div>
                                <div>
                                    <img src="images/slide7.png" alt="slide7">
                                </div>
                                <div>
                                    <img src="images/slide8.png" alt="slide8">
                                </div>
                                <div>
                                    <img src="images/slide9.png" alt="slide9">
                                </div>
                                <div>
                                    <img src="images/slide10.png" alt="slide10">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="newsletter">
                                <h1>Email newsletter</h1>
                                <h6>Subscribe my Newsletter for new blog posts, tips & new photos. Let's stay updated!</h6>
                                <form action="" class="newsletter-form">
                                    <div class="form-field">
                                        <input type="text" name="" id="" placeholder="Your first name">
                                    </div>
                                    <div class="form-field">
                                        <input type="text" name="" id="" placeholder="Your last name">
                                    </div>
                                    <div class="form-field">
                                        <input type="text" name="" id="" placeholder="Your email adress">
                                    </div>
                                    <button class="form-button">Subscribe to newsletter</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="footer-info">
                                <div class="footer-all-right-reserved">
                                    <h5>@2019 Logwork. All Right Reserved.</h5>
                                </div>
                                <div class="footer-menu">
                                    <div>Home</div>
                                    <div>Recipes</div>
                                    <div>Article</div>
                                    <div>Contact</div>
                                    <div>Purchase</div>
                                </div>
                                <div class="footer-terms-privacy-police">
                                    <h5>Terms / Privacy police</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App