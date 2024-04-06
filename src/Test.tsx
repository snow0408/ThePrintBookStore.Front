const Test: React.FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content="" />
                <meta name="author" content="DexignZone" />
                <meta name="robots" content="" />
                <meta
                    name="description"
                    content="Bookland-Book Store Ecommerce Website"
                />
                <meta name="format-detection" content="telephone=no" />

                <title>Bookland Book Store Ecommerce Website</title>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/menu/bootstrap-select.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/menu/all.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/menu/swiper-bundle.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/menu/animate.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="assets/css/menu/style.css"
                />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="assets/css/menu/css2.css" rel="stylesheet" />
            </head>
            <body>
                <div className="page-wraper">
                    <header className="site-header mo-left header style-1">
                        <div className="header-info-bar">
                            <div className="container clearfix">
                                <div className="logo-header logo-dark">
                                    <a href="">
                                        <img
                                            src="assets/picture/logo.png"
                                            alt="logo"
                                        />
                                    </a>
                                </div>

                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <ul className="navbar-nav header-right">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="wishlist.html"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        width="24px"
                                                        fill="#000000"
                                                    >
                                                        <path
                                                            d="M0 0h24v24H0V0z"
                                                            fill="none"
                                                        ></path>
                                                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                                    </svg>
                                                    <span className="badge">
                                                        21
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    type="button"
                                                    className="nav-link box cart-btn"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        width="24px"
                                                        fill="#000000"
                                                    >
                                                        <path
                                                            d="M0 0h24v24H0V0z"
                                                            fill="none"
                                                        ></path>
                                                        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                                    </svg>
                                                    <span className="badge">
                                                        5
                                                    </span>
                                                </button>
                                                <ul className="dropdown-menu cart-list">
                                                    <li className="cart-item">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="books-detail.html">
                                                                    <img
                                                                        alt=""
                                                                        className="media-object"
                                                                        src="assets/picture/pic1.jpg"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="dz-title">
                                                                    <a
                                                                        href="books-detail.html"
                                                                        className="media-heading"
                                                                    >
                                                                        Real
                                                                        Life
                                                                    </a>
                                                                </h6>
                                                                <span className="dz-price">
                                                                    $28.00
                                                                </span>
                                                                <span className="item-close">
                                                                    &times;
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="books-detail.html">
                                                                    <img
                                                                        alt=""
                                                                        className="media-object"
                                                                        src="assets/picture/pic2.jpg"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="dz-title">
                                                                    <a
                                                                        href="books-detail.html"
                                                                        className="media-heading"
                                                                    >
                                                                        Home
                                                                    </a>
                                                                </h6>
                                                                <span className="dz-price">
                                                                    $28.00
                                                                </span>
                                                                <span className="item-close">
                                                                    &times;
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="books-detail.html">
                                                                    <img
                                                                        alt=""
                                                                        className="media-object"
                                                                        src="assets/picture/pic3.jpg"
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="dz-title">
                                                                    <a
                                                                        href="books-detail.html"
                                                                        className="media-heading"
                                                                    >
                                                                        Such a
                                                                        fun age
                                                                    </a>
                                                                </h6>
                                                                <span className="dz-price">
                                                                    $28.00
                                                                </span>
                                                                <span className="item-close">
                                                                    &times;
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item text-center">
                                                        <h6 className="text-secondary">
                                                            Totle = $500
                                                        </h6>
                                                    </li>
                                                    <li className="text-center d-flex">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-sm btn-primary me-2 btnhover w-100"
                                                        >
                                                            View Cart
                                                        </a>
                                                        <a
                                                            href="shop-checkout.html"
                                                            className="btn btn-sm btn-outline-primary btnhover w-100"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown profile-dropdown ms-4">
                                                <a
                                                    className="nav-link"
                                                    href=""
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <img
                                                        src="assets/picture/profile1.jpg"
                                                        alt="/"
                                                    />
                                                    <div className="profile-info">
                                                        <h6 className="title">
                                                            Brian
                                                        </h6>
                                                        <span>
                                                            info@gmail.com
                                                        </span>
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu py-0 dropdown-menu-end">
                                                    <div className="dropdown-header">
                                                        <h6 className="m-0">
                                                            Brian
                                                        </h6>
                                                        <span>
                                                            info@gmail.com
                                                        </span>
                                                    </div>
                                                    <div className="dropdown-body">
                                                        <a
                                                            href="my-profile.html"
                                                            className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                                                        >
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    height="20px"
                                                                    viewBox="0 0 24 24"
                                                                    width="20px"
                                                                    fill="#000000"
                                                                >
                                                                    <path
                                                                        d="M0 0h24v24H0V0z"
                                                                        fill="none"
                                                                    ></path>
                                                                    <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                                                </svg>
                                                                <span className="ms-2">
                                                                    Profile
                                                                </span>
                                                            </div>{" "}
                                                        </a>
                                                        <a
                                                            href="shop-cart.html"
                                                            className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                                                        >
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    height="20px"
                                                                    viewBox="0 0 24 24"
                                                                    width="20px"
                                                                    fill="#000000"
                                                                >
                                                                    <path
                                                                        d="M0 0h24v24H0V0z"
                                                                        fill="none"
                                                                    ></path>
                                                                    <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                                                </svg>
                                                                <span className="ms-2">
                                                                    My Order
                                                                </span>
                                                            </div>{" "}
                                                        </a>
                                                        <a
                                                            href="wishlist.html"
                                                            className="dropdown-item d-flex justify-content-between align-items-center ai-icon"
                                                        >
                                                            <div>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    height="20px"
                                                                    viewBox="0 0 24 24"
                                                                    width="20px"
                                                                    fill="#000000"
                                                                >
                                                                    <path
                                                                        d="M0 0h24v24H0V0z"
                                                                        fill="none"
                                                                    ></path>
                                                                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                                                </svg>
                                                                <span className="ms-2">
                                                                    Wishlist
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="dropdown-footer">
                                                        <a
                                                            className="btn btn-primary w-100 btnhover btn-sm"
                                                            href="shop-login.html"
                                                        >
                                                            Log Out
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="header-search-nav">
                                    <form className="header-item-search">
                                        <div className="input-group search-input">
                                            <select className="default-select">
                                                <option>Category</option>
                                                <option>Photography</option>
                                                <option>Arts</option>
                                                <option>Adventure</option>
                                                <option>Action</option>
                                                <option>Games</option>
                                                <option>Movies</option>
                                                <option>Comics</option>
                                                <option>Biographies</option>
                                                <option>
                                                    Children’s Books
                                                </option>
                                                <option>Historical</option>
                                                <option>Contemporary</option>
                                                <option>classNameics</option>
                                                <option>Education</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className=" main-bar-wraper navbar-expand-lg">
                            <div className="main-bar clearfix">
                                <div className="container clearfix">
                                    <div className="logo-header logo-dark">
                                        <a href="">
                                            <img
                                                src="assets/picture/logo.png"
                                                alt="logo"
                                            />
                                        </a>
                                    </div>
                                    <button
                                        className="navbar-toggler collapsed navicon justify-content-end"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>

                                    <div className="extra-nav">
                                        <div className="extra-cell">
                                            <a
                                                href="contact-us.html"
                                                className="btn btn-primary btnhover"
                                            >
                                                Get In Touch
                                            </a>
                                        </div>
                                    </div>

                                    <div
                                        className="header-nav navbar-collapse collapse justify-content-start"
                                        id="navbarNavDropdown"
                                    >
                                        <div className="logo-header logo-dark">
                                            <a href="">
                                                <img
                                                    src="assets/picture/logo.png"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <form className="search-input">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    aria-label="Text input with dropdown button"
                                                    placeholder="Search Books Here"
                                                />
                                                <button
                                                    className="btn"
                                                    type="button"
                                                >
                                                    <i className="flaticon-loupe"></i>
                                                </button>
                                            </div>
                                        </form>
                                        <ul className="nav navbar-nav">
                                            <li className="sub-menu-down">
                                                <a href="">
                                                    <span>Home</span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="">Home 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="index-2.html">
                                                            Home 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="about-us.html">
                                                    <span>About Us</span>
                                                </a>
                                            </li>
                                            <li className="sub-menu-down">
                                                <a href="">
                                                    <span>Pages</span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="my-profile.html">
                                                            My Profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="services.html">
                                                            Services
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="faq.html">
                                                            FAQ's
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="help-desk.html">
                                                            Help Desk
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="coming-soon.html">
                                                            Coming Soon
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing.html">
                                                            Pricing
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="privacy-policy.html">
                                                            Privacy Policy
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="under-construction.html">
                                                            Under Construction
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="error-404.html">
                                                            Error 404
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu-down">
                                                <a href="">
                                                    <span>Shop</span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="books-grid-view.html">
                                                            Shop Grid
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="books-grid-view-sidebar.html">
                                                            Shop Grid Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="books-list.html">
                                                            Shop List
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="books-list-view-sidebar.html">
                                                            Shop List Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="books-detail.html">
                                                            Shop Detail
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-cart.html">
                                                            Cart
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-checkout.html">
                                                            Checkout
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="wishlist.html">
                                                            Wishlist
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-login.html">
                                                            Login
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-registration.html">
                                                            Registration
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu-down">
                                                <a href="">
                                                    <span>Blog</span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="blog-grid.html">
                                                            Blog Grid
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-large-sidebar.html">
                                                            Blog Large Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-sidebar.html">
                                                            Blog List Sidebar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-detail.html">
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact-us.html">
                                                    <span>Contact Us</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="dz-social-icon">
                                            <ul>
                                                <li>
                                                    <a
                                                        className="fab fa-facebook-f"
                                                        target="_self"
                                                        href=""
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fab fa-twitter"
                                                        target="_self"
                                                        href=""
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fab fa-linkedin-in"
                                                        target="_self"
                                                        href=""
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="fab fa-instagram"
                                                        target="_self"
                                                        href=""
                                                    ></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="page-content bg-white">
                        <div className="main-slider style-1">
                            <div className="main-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide bg-blue">
                                        <div className="container">
                                            <div className="banner-content">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="swiper-content">
                                                            <div className="content-info">
                                                                <h6
                                                                    className="sub-title"
                                                                    data-swiper-parallax="-10"
                                                                >
                                                                    BEST
                                                                    MANAGEMENT
                                                                </h6>
                                                                <h1
                                                                    className="title mb-0"
                                                                    data-swiper-parallax="-20"
                                                                >
                                                                    Think and
                                                                    Grow Rich
                                                                </h1>
                                                                <ul
                                                                    className="dz-tags"
                                                                    data-swiper-parallax="-30"
                                                                >
                                                                    <li>
                                                                        <a href="">
                                                                            Napoleon
                                                                            Hill
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Business
                                                                            &
                                                                            Strategy
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <p
                                                                    className="text mb-0"
                                                                    data-swiper-parallax="-40"
                                                                >
                                                                    It is a long
                                                                    established
                                                                    fact that a
                                                                    reader will
                                                                    be
                                                                    distracted
                                                                    by the
                                                                    readable
                                                                    content of a
                                                                    page when
                                                                    looking at
                                                                    its layout.
                                                                    The point of
                                                                    using Lorem
                                                                    Ipsum is
                                                                    that it has
                                                                    a
                                                                    more-or-less
                                                                    normal.
                                                                </p>
                                                                <div
                                                                    className="price"
                                                                    data-swiper-parallax="-50"
                                                                >
                                                                    <span className="price-num">
                                                                        $17.2
                                                                    </span>
                                                                    <del>
                                                                        $15.25
                                                                    </del>
                                                                    <span className="badge badge-danger">
                                                                        15% OFF
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="content-btn"
                                                                    data-swiper-parallax="-60"
                                                                >
                                                                    <a
                                                                        className="btn btn-primary btnhover"
                                                                        href="books-grid-view.html"
                                                                    >
                                                                        Buy Now
                                                                    </a>
                                                                    <a
                                                                        className="btn border btnhover ms-4 text-white"
                                                                        href="books-detail.html"
                                                                    >
                                                                        See
                                                                        Details
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="partner">
                                                                <p>
                                                                    Our partner
                                                                </p>
                                                                <div className="brand-logo">
                                                                    <img
                                                                        src="assets/picture/partner-1.png"
                                                                        alt="client"
                                                                    />
                                                                    <img
                                                                        className="mid-logo"
                                                                        src="assets/picture/partner-2.png"
                                                                        alt="client"
                                                                    />
                                                                    <img
                                                                        src="assets/picture/partner-3.png"
                                                                        alt="client"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div
                                                            className="banner-media"
                                                            data-swiper-parallax="-100"
                                                        >
                                                            <img
                                                                src="assets/picture/banner-media.png"
                                                                alt="banner-media"
                                                            />
                                                        </div>
                                                        <img
                                                            className="pattern"
                                                            src="assets/picture/Group.png"
                                                            data-swiper-parallax="-100"
                                                            alt="dots"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide bg-blue">
                                        <div className="container">
                                            <div className="banner-content">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="swiper-content">
                                                            <div className="content-info">
                                                                <h6
                                                                    className="sub-title"
                                                                    data-swiper-parallax="-10"
                                                                >
                                                                    BEST SELLER
                                                                </h6>
                                                                <h1
                                                                    className="title mb-0"
                                                                    data-swiper-parallax="-20"
                                                                >
                                                                    Pushing
                                                                    Clouds
                                                                </h1>
                                                                <ul
                                                                    className="dz-tags"
                                                                    data-swiper-parallax="-30"
                                                                >
                                                                    <li>
                                                                        <a href="">
                                                                            Napoleon
                                                                            Hill
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">
                                                                            Business
                                                                            &
                                                                            Strategy
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <p
                                                                    className="text mb-0"
                                                                    data-swiper-parallax="-40"
                                                                >
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet,
                                                                    consectetur
                                                                    adipiscing
                                                                    elit, sed do
                                                                    eiusmod
                                                                    tempor
                                                                    incididunt
                                                                    ut labore et
                                                                    dolore magna
                                                                    aliqua. Ut
                                                                    enim ad
                                                                    minim
                                                                    veniam, quis
                                                                    nostrud
                                                                    exercitation
                                                                    ullamco
                                                                    laboris
                                                                </p>
                                                                <div
                                                                    className="price"
                                                                    data-swiper-parallax="-50"
                                                                >
                                                                    <span className="price-num">
                                                                        $9.5
                                                                    </span>
                                                                    <del>
                                                                        $12.0
                                                                    </del>
                                                                    <span className="badge badge-danger">
                                                                        20% OFF
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="content-btn"
                                                                    data-swiper-parallax="-50"
                                                                >
                                                                    <a
                                                                        className="btn btn-primary btnhover"
                                                                        href="books-grid-view.html"
                                                                    >
                                                                        Buy Now
                                                                    </a>
                                                                    <a
                                                                        className="btn border btnhover ms-4 text-white"
                                                                        href="books-detail.html"
                                                                    >
                                                                        See
                                                                        Details
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="partner">
                                                                <p>
                                                                    Our partner
                                                                </p>
                                                                <div className="brand-logo">
                                                                    <img
                                                                        src="assets/picture/partner-1.png"
                                                                        alt="client"
                                                                    />
                                                                    <img
                                                                        className="mid-logo"
                                                                        src="assets/picture/partner-2.png"
                                                                        alt="client"
                                                                    />
                                                                    <img
                                                                        src="assets/picture/partner-3.png"
                                                                        alt="client"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div
                                                            className="banner-media"
                                                            data-swiper-parallax="-100"
                                                        >
                                                            <img
                                                                src="assets/picture/banner-media2.png"
                                                                alt="banner-media1"
                                                            />
                                                        </div>
                                                        <img
                                                            className="pattern"
                                                            src="assets/picture/Group.png"
                                                            data-swiper-parallax="-100"
                                                            alt="dots"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container swiper-pagination-wrapper">
                                    <div className="swiper-pagination-five"></div>
                                </div>
                            </div>
                            <div className="swiper main-swiper-thumb">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="books-card">
                                            <div className="dz-media">
                                                <img
                                                    src="assets/picture/book16.png"
                                                    alt="book"
                                                />
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title mb-0">
                                                    Think and Grow Rich
                                                </h5>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li>
                                                            by Napoleon Hill
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="book-footer">
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                    </div>
                                                    <div className="rate">
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="books-card">
                                            <div className="dz-media">
                                                <img
                                                    src="assets/picture/book9.jpg"
                                                    alt="book"
                                                />
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title mb-0">
                                                    Pushing Clouds
                                                </h5>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li>by Jamet Sigh</li>
                                                    </ul>
                                                </div>
                                                <div className="book-footer">
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $5.7
                                                        </span>
                                                    </div>
                                                    <div className="rate">
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="books-card">
                                            <div className="dz-media">
                                                <img
                                                    src="assets/picture/book16.png"
                                                    alt="book"
                                                />
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title mb-0">
                                                    Think and Grow Rich
                                                </h5>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li>
                                                            by Napoleon Hill
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="book-footer">
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                    </div>
                                                    <div className="rate">
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="books-card">
                                            <div className="dz-media">
                                                <img
                                                    src="assets/picture/book9.jpg"
                                                    alt="book"
                                                />
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title mb-0">
                                                    Pushing Clouds
                                                </h5>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li>by Jamet Sigh</li>
                                                    </ul>
                                                </div>
                                                <div className="book-footer">
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $5.7
                                                        </span>
                                                    </div>
                                                    <div className="rate">
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-yellow"></i>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white py-5">
                            <div className="container">
                                <div className="swiper client-swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img
                                                src="assets/picture/client1.svg"
                                                alt="client"
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                src="assets/picture/client2.svg"
                                                alt="client"
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                src="assets/picture/client3.svg"
                                                alt="client"
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                src="assets/picture/client4.svg"
                                                alt="client"
                                            />
                                        </div>
                                        <div className="swiper-slide">
                                            <img
                                                src="assets/picture/client5.svg"
                                                alt="client"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="content-inner-1 bg-grey reccomend">
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="title">
                                        Recomended For You
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                    </p>
                                </div>

                                <div className="swiper-container swiper-two">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-1 wow fadeInUp"
                                                data-wow-delay="0.1s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book6.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h4 className="title">
                                                        Adventure
                                                    </h4>
                                                    <span className="price">
                                                        $18,78
                                                    </span>
                                                    <a
                                                        href="shop-cart.html"
                                                        className="btn btn-secondary btnhover btnhover2"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-1 wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book5.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h4 className="title">
                                                        Take Tango
                                                    </h4>
                                                    <span className="price">
                                                        $18,78
                                                    </span>
                                                    <a
                                                        href="shop-cart.html"
                                                        className="btn btn-secondary btnhover btnhover2"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-1 wow fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book2.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h4 className="title">
                                                        Home
                                                    </h4>
                                                    <span className="price">
                                                        $18,78
                                                    </span>
                                                    <a
                                                        href="shop-cart.html"
                                                        className="btn btn-secondary btnhover btnhover2"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-1 wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book16.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h4 className="title">
                                                        Thunder Stunt
                                                    </h4>
                                                    <span className="price">
                                                        $18,78
                                                    </span>
                                                    <a
                                                        href="shop-cart.html"
                                                        className="btn btn-secondary btnhover btnhover2"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-1 wow fadeInUp"
                                                data-wow-delay="0.5s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book14.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h4 className="title">
                                                        Heavy Lift
                                                    </h4>
                                                    <span className="price">
                                                        $18,78
                                                    </span>
                                                    <a
                                                        href="shop-cart.html"
                                                        className="btn btn-secondary btnhover btnhover2"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-1 wow fadeInUp"
                                                data-wow-delay="0.6s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book1.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h4 className="title">
                                                        Real Life
                                                    </h4>
                                                    <span className="price">
                                                        $18,78
                                                    </span>
                                                    <a
                                                        href="shop-cart.html"
                                                        className="btn btn-secondary btnhover btnhover2"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-1 wow fadeInUp"
                                                data-wow-delay="0.7s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book15.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h4 className="title">
                                                        Terrible
                                                    </h4>
                                                    <span className="price">
                                                        $18,78
                                                    </span>
                                                    <a
                                                        href="shop-cart.html"
                                                        className="btn btn-secondary btnhover btnhover2"
                                                    >
                                                        <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-inner-2">
                            <div className="container">
                                <div className="row">
                                    <div
                                        className="col-lg-3 col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div className="icon-bx-wraper style-1 m-b20 text-center">
                                            <div className="icon-bx-sm m-b10">
                                                <i className="flaticon-power icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title m-b10">
                                                    Quick Delivery
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="icon-bx-wraper style-1 m-b20 text-center">
                                            <div className="icon-bx-sm m-b10">
                                                <i className="flaticon-shield icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title m-b10">
                                                    Secure Payment
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="icon-bx-wraper style-1 m-b20 text-center">
                                            <div className="icon-bx-sm m-b10">
                                                <i className="flaticon-like icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title m-b10">
                                                    Best Quality
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-sm-6 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="icon-bx-wraper style-1 m-b20 text-center">
                                            <div className="icon-bx-sm m-b10">
                                                <i className="flaticon-star icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h5 className="dz-title m-b10">
                                                    Return Guarantee
                                                </h5>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-inner-1">
                            <div className="container">
                                <div className="section-head book-align">
                                    <h2 className="title mb-0">
                                        Books on Sale
                                    </h2>
                                    <div className="pagination-align style-1">
                                        <div className="swiper-button-prev">
                                            <i className="fa-solid fa-angle-left"></i>
                                        </div>
                                        <div className="swiper-pagination-two"></div>
                                        <div className="swiper-button-next">
                                            <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-container books-wrapper-3 swiper-four">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-3 wow fadeInUp"
                                                data-wow-delay="0.1s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book5.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="title">
                                                        <a href="books-grid-view.html">
                                                            Take Out Tango
                                                        </a>
                                                    </h5>
                                                    <ul className="dz-tags">
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                SPORTS,
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                DRAMA
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="book-footer">
                                                        <div className="rate">
                                                            <i className="flaticon-star"></i>
                                                            6.8
                                                        </div>
                                                        <div className="price">
                                                            <span className="price-num">
                                                                $9.5
                                                            </span>
                                                            <del>$12.0</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-3 wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book11.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="title">
                                                        <a href="books-grid-view.html">
                                                            The Missadventure
                                                        </a>
                                                    </h5>
                                                    <ul className="dz-tags">
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                SPORTS,
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                DRAMA
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="book-footer">
                                                        <div className="rate">
                                                            <i className="flaticon-star"></i>
                                                            6.8
                                                        </div>
                                                        <div className="price">
                                                            <span className="price-num">
                                                                $9.5
                                                            </span>
                                                            <del>$12.0</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-3 wow fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book7.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="title">
                                                        <a href="books-grid-view.html">
                                                            Seconds [PART 1]
                                                        </a>
                                                    </h5>
                                                    <ul className="dz-tags">
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                SPORTS,
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                DRAMA
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="book-footer">
                                                        <div className="rate">
                                                            <i className="flaticon-star"></i>
                                                            6.8
                                                        </div>
                                                        <div className="price">
                                                            <span className="price-num">
                                                                $9.5
                                                            </span>
                                                            <del>$12.0</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-3 wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book12.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="title">
                                                        <a href="books-grid-view.html">
                                                            The Missadventure
                                                        </a>
                                                    </h5>
                                                    <ul className="dz-tags">
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                SPORTS,
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                DRAMA
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="book-footer">
                                                        <div className="rate">
                                                            <i className="flaticon-star"></i>
                                                            6.8
                                                        </div>
                                                        <div className="price">
                                                            <span className="price-num">
                                                                $9.5
                                                            </span>
                                                            <del>$12.0</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-3 wow fadeInUp"
                                                data-wow-delay="0.5s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book15.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="title">
                                                        <a href="books-grid-view.html">
                                                            Terrible Madness
                                                        </a>
                                                    </h5>
                                                    <ul className="dz-tags">
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                SPORTS,
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                DRAMA
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="book-footer">
                                                        <div className="rate">
                                                            <i className="flaticon-star"></i>
                                                            6.8
                                                        </div>
                                                        <div className="price">
                                                            <span className="price-num">
                                                                $9.5
                                                            </span>
                                                            <del>$12.0</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="books-card style-3 wow fadeInUp"
                                                data-wow-delay="0.6s"
                                            >
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/book3.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h5 className="title">
                                                        <a href="books-grid-view.html">
                                                            Battle Drive
                                                        </a>
                                                    </h5>
                                                    <ul className="dz-tags">
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                SPORTS,
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="books-grid-view.html">
                                                                DRAMA
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="book-footer">
                                                        <div className="rate">
                                                            <i className="flaticon-star"></i>
                                                            6.8
                                                        </div>
                                                        <div className="price">
                                                            <span className="price-num">
                                                                $9.5
                                                            </span>
                                                            <del>$12.0</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-inner-1 bg-grey reccomend">
                            <div className="container">
                                <div className="section-head text-center">
                                    <div className="circle style-1"></div>
                                    <h2 className="title">Featured Product</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                    </p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="swiper-container books-wrapper-2 swiper-three">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="books-card style-2">
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/bigbook1.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h6 className="sub-title">
                                                        BEST SELLER
                                                    </h6>
                                                    <h2 className="title">
                                                        A Heavy LIft
                                                    </h2>
                                                    <ul className="dz-tags">
                                                        <li>Napoleon Hill</li>
                                                        <li>
                                                            Business & Strategy
                                                        </li>
                                                    </ul>
                                                    <p className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation ullamco
                                                        laboris
                                                    </p>
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                        <del>$12.0</del>
                                                        <span className="badge">
                                                            20% OFF
                                                        </span>
                                                    </div>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary btnhover m-t15 m-r10"
                                                        >
                                                            Buy Now
                                                        </a>
                                                        <a
                                                            href="books-detail.html"
                                                            className="btn btn-outline-secondary btnhover m-t15"
                                                        >
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="books-card style-2">
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/bigbook2.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h6 className="sub-title">
                                                        BEST SELLER
                                                    </h6>
                                                    <h2 className="title">
                                                        A Heavy LIft
                                                    </h2>
                                                    <ul className="dz-tags">
                                                        <li>Napoleon Hill</li>
                                                        <li>
                                                            Business & Strategy
                                                        </li>
                                                    </ul>
                                                    <p className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation ullamco
                                                        laboris
                                                    </p>
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                        <del>$12.0</del>
                                                        <span className="badge">
                                                            20% OFF
                                                        </span>
                                                    </div>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary btnhover m-t15 m-r10"
                                                        >
                                                            Buy Now
                                                        </a>
                                                        <a
                                                            href="books-detail.html"
                                                            className="btn btn-outline-secondary btnhover m-t15"
                                                        >
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="books-card style-2">
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/bigbook1.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h6 className="sub-title">
                                                        BEST SELLER
                                                    </h6>
                                                    <h2 className="title">
                                                        A Heavy LIft
                                                    </h2>
                                                    <ul className="dz-tags">
                                                        <li>Napoleon Hill</li>
                                                        <li>
                                                            Business & Strategy
                                                        </li>
                                                    </ul>
                                                    <p className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation ullamco
                                                        laboris
                                                    </p>
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                        <del>$12.0</del>
                                                        <span className="badge">
                                                            20% OFF
                                                        </span>
                                                    </div>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary btnhover m-t15 m-r10"
                                                        >
                                                            Buy Now
                                                        </a>
                                                        <a
                                                            href="books-detail.html"
                                                            className="btn btn-outline-secondary btnhover m-t15"
                                                        >
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="books-card style-2">
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/bigbook2.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h6 className="sub-title">
                                                        BEST SELLER
                                                    </h6>
                                                    <h2 className="title">
                                                        A Heavy LIft
                                                    </h2>
                                                    <ul className="dz-tags">
                                                        <li>Napoleon Hill</li>
                                                        <li>
                                                            Business & Strategy
                                                        </li>
                                                    </ul>
                                                    <p className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation ullamco
                                                        laboris
                                                    </p>
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                        <del>$12.0</del>
                                                        <span className="badge">
                                                            20% OFF
                                                        </span>
                                                    </div>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary btnhover m-t15 m-r10"
                                                        >
                                                            Buy Now
                                                        </a>
                                                        <a
                                                            href="books-detail.html"
                                                            className="btn btn-outline-secondary btnhover m-t15"
                                                        >
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="books-card style-2">
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/bigbook1.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h6 className="sub-title">
                                                        BEST SELLER
                                                    </h6>
                                                    <h2 className="title">
                                                        A Heavy LIft
                                                    </h2>
                                                    <ul className="dz-tags">
                                                        <li>Napoleon Hill</li>
                                                        <li>
                                                            Business & Strategy
                                                        </li>
                                                    </ul>
                                                    <p className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation ullamco
                                                        laboris
                                                    </p>
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                        <del>$12.0</del>
                                                        <span className="badge">
                                                            20% OFF
                                                        </span>
                                                    </div>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary btnhover m-t15 m-r10"
                                                        >
                                                            Buy Now
                                                        </a>
                                                        <a
                                                            href="books-detail.html"
                                                            className="btn btn-outline-secondary btnhover m-t15"
                                                        >
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="books-card style-2">
                                                <div className="dz-media">
                                                    <img
                                                        src="assets/picture/bigbook2.jpg"
                                                        alt="book"
                                                    />
                                                </div>
                                                <div className="dz-content">
                                                    <h6 className="sub-title">
                                                        BEST SELLER
                                                    </h6>
                                                    <h2 className="title">
                                                        A Heavy LIft
                                                    </h2>
                                                    <ul className="dz-tags">
                                                        <li>Napoleon Hill</li>
                                                        <li>
                                                            Business & Strategy
                                                        </li>
                                                    </ul>
                                                    <p className="text">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut
                                                        enim ad minim veniam,
                                                        quis nostrud
                                                        exercitation ullamco
                                                        laboris
                                                    </p>
                                                    <div className="price">
                                                        <span className="price-num">
                                                            $9.5
                                                        </span>
                                                        <del>$12.0</del>
                                                        <span className="badge">
                                                            20% OFF
                                                        </span>
                                                    </div>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary btnhover m-t15 m-r10"
                                                        >
                                                            Buy Now
                                                        </a>
                                                        <a
                                                            href="books-detail.html"
                                                            className="btn btn-outline-secondary btnhover m-t15"
                                                        >
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination-align style-2">
                                        <div className="swiper-button-prev">
                                            <i className="fa-solid fa-angle-left"></i>
                                        </div>
                                        <div className="swiper-pagination-three"></div>
                                        <div className="swiper-button-next">
                                            <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-inner-2">
                            <div className="container">
                                <div className="section-head book-align">
                                    <h2 className="title mb-0">
                                        Special Offers
                                    </h2>
                                    <div className="pagination-align style-1">
                                        <div className="book-button-prev swiper-button-prev">
                                            <i className="fa-solid fa-angle-left"></i>
                                        </div>
                                        <div className="book-button-next swiper-button-next">
                                            <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-container book-swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-card style-2 wow fadeInUp"
                                                data-wow-delay="0.1s"
                                            >
                                                <div className="dz-media">
                                                    <a href="books-detail.html">
                                                        <img
                                                            src="assets/picture/blog5.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info">
                                                    <h4 className="dz-title">
                                                        <a href="books-detail.html">
                                                            SECONDS [Part I]
                                                        </a>
                                                    </h4>
                                                    <div className="dz-meta">
                                                        <ul className="dz-tags">
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    BIOGRAPHY
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    THRILLER
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    HORROR
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore.
                                                    </p>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary m-t15 btnhover btnhover2"
                                                        >
                                                            <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                            Add to cart
                                                        </a>
                                                        <div className="price-details">
                                                            $18,78{" "}
                                                            <del>$25</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-card style-2 wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="dz-media">
                                                    <a href="books-detail.html">
                                                        <img
                                                            src="assets/picture/blog6.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info">
                                                    <h4 className="dz-title">
                                                        <a href="books-detail.html">
                                                            Terrible Madness
                                                        </a>
                                                    </h4>
                                                    <div className="dz-tags">
                                                        <ul>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    BIOGRAPHY
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    THRILLER
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    HORROR
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore.
                                                    </p>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary m-t15 btnhover btnhover2"
                                                        >
                                                            <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                            Add to cart
                                                        </a>
                                                        <div className="price-details">
                                                            $18,78{" "}
                                                            <del>$25</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-card style-2 wow fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                <div className="dz-media">
                                                    <a href="books-detail.html">
                                                        <img
                                                            src="assets/picture/blog7.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info">
                                                    <h4 className="dz-title">
                                                        <a href="books-detail.html">
                                                            REWORK
                                                        </a>
                                                    </h4>
                                                    <div className="dz-tags">
                                                        <ul>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    BIOGRAPHY
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    THRILLER
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    HORROR
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore.
                                                    </p>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary m-t15 btnhover btnhover2"
                                                        >
                                                            <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                            Add to cart
                                                        </a>
                                                        <div className="price-details">
                                                            $18,78{" "}
                                                            <del>$25</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-card style-2 wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <div className="dz-media">
                                                    <a href="books-detail.html">
                                                        <img
                                                            src="assets/picture/blog5.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info">
                                                    <h4 className="dz-title">
                                                        <a href="books-detail.html">
                                                            SECONDS [Part I]
                                                        </a>
                                                    </h4>
                                                    <div className="dz-tags">
                                                        <ul>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    BIOGRAPHY
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    THRILLER
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    HORROR
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore.
                                                    </p>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary m-t15 btnhover btnhover2"
                                                        >
                                                            <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                            Add to cart
                                                        </a>
                                                        <div className="price-details">
                                                            $18,78{" "}
                                                            <del>$25</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-card style-2 wow fadeInUp"
                                                data-wow-delay="0.5s"
                                            >
                                                <div className="dz-media">
                                                    <a href="books-detail.html">
                                                        <img
                                                            src="assets/picture/blog6.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info">
                                                    <h4 className="dz-title">
                                                        <a href="books-detail.html">
                                                            Terrible Madness
                                                        </a>
                                                    </h4>
                                                    <div className="dz-tags">
                                                        <ul>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    BIOGRAPHY
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    THRILLER
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    HORROR
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore.
                                                    </p>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary m-t15 btnhover btnhover2"
                                                        >
                                                            <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                            Add to cart
                                                        </a>
                                                        <div className="price-details">
                                                            $18,78{" "}
                                                            <del>$25</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-card style-2 wow fadeInUp"
                                                data-wow-delay="0.6s"
                                            >
                                                <div className="dz-media">
                                                    <a href="books-detail.html">
                                                        <img
                                                            src="assets/picture/blog7.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info">
                                                    <h4 className="dz-title">
                                                        <a href="books-detail.html">
                                                            REWORK
                                                        </a>
                                                    </h4>
                                                    <div className="dz-tags">
                                                        <ul>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    BIOGRAPHY
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    THRILLER
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="books-detail.html">
                                                                    HORROR
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore.
                                                    </p>
                                                    <div className="bookcard-footer">
                                                        <a
                                                            href="shop-cart.html"
                                                            className="btn btn-primary m-t15 btnhover btnhover2"
                                                        >
                                                            <i className="flaticon-shopping-cart-1 m-r10"></i>
                                                            Add to cart
                                                        </a>
                                                        <div className="price-details">
                                                            $18,78{" "}
                                                            <del>$25</del>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-inner-2 testimonial-wrapper">
                            <div className="container">
                                <div className="testimonial">
                                    <div className="section-head book-align">
                                        <div>
                                            <h2 className="title mb-0">
                                                Testimonials
                                            </h2>
                                            <p className="m-b0">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua
                                            </p>
                                        </div>
                                        <div className="pagination-align style-1">
                                            <div className="testimonial-button-prev swiper-button-prev">
                                                <i className="fa-solid fa-angle-left"></i>
                                            </div>
                                            <div className="testimonial-button-next swiper-button-next">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-container testimonial-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div
                                            className="testimonial-1 wow fadeInUp"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="testimonial-info">
                                                <ul className="dz-rating">
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                </ul>
                                                <div className="testimonial-text">
                                                    <p>
                                                        Very impresive store.
                                                        Your book made studying
                                                        for the ABC
                                                        certification exams a
                                                        breeze. Thank you very
                                                        much
                                                    </p>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <div className="testimonial-pic">
                                                        <img
                                                            src="assets/picture/testimonial1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="info-right">
                                                        <h6 className="testimonial-name">
                                                            Jason Huang
                                                        </h6>
                                                        <span className="testimonial-position">
                                                            Book Lovers
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div
                                            className="testimonial-1 wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <div className="testimonial-info">
                                                <ul className="dz-rating">
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                </ul>
                                                <div className="testimonial-text">
                                                    <p>
                                                        Very impresive store.
                                                        Your book made studying
                                                        for the ABC
                                                        certification exams a
                                                        breeze. Thank you very
                                                        much
                                                    </p>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <div className="testimonial-pic radius">
                                                        <img
                                                            src="assets/picture/testimonial2.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="testimonial-name">
                                                            Miranda Lee
                                                        </h6>
                                                        <span className="testimonial-position">
                                                            Book Lovers
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div
                                            className="testimonial-1 wow fadeInUp"
                                            data-wow-delay="0.3s"
                                        >
                                            <div className="testimonial-info">
                                                <ul className="dz-rating">
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                </ul>
                                                <div className="testimonial-text">
                                                    <p>
                                                        Very impresive store.
                                                        Your book made studying
                                                        for the ABC
                                                        certification exams a
                                                        breeze. Thank you very
                                                        much
                                                    </p>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <div className="testimonial-pic radius">
                                                        <img
                                                            src="assets/picture/testimonial3.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="testimonial-name">
                                                            Steve Henry
                                                        </h6>
                                                        <span className="testimonial-position">
                                                            Book Lovers
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div
                                            className="testimonial-1 wow fadeInUp"
                                            data-wow-delay="0.4s"
                                        >
                                            <div className="testimonial-info">
                                                <ul className="dz-rating">
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                </ul>
                                                <div className="testimonial-text">
                                                    <p>
                                                        Thank you for filling a
                                                        niche at an affordable
                                                        price. Your book was
                                                        just what I was looking
                                                        for. Thanks again
                                                    </p>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <div className="testimonial-pic radius">
                                                        <img
                                                            src="assets/picture/testimonial4.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="testimonial-name">
                                                            Angela Moss
                                                        </h6>
                                                        <span className="testimonial-position">
                                                            Book Lovers
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div
                                            className="testimonial-1 wow fadeInUp"
                                            data-wow-delay="0.5s"
                                        >
                                            <div className="testimonial-info">
                                                <ul className="dz-rating">
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                </ul>
                                                <div className="testimonial-text">
                                                    <p>
                                                        Very impresive store.
                                                        Your book made studying
                                                        for the ABC
                                                        certification exams a
                                                        breeze. Thank you very
                                                        much
                                                    </p>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <div className="testimonial-pic radius">
                                                        <img
                                                            src="assets/picture/testimonial2.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6 className="testimonial-name">
                                                            Miranda Lee
                                                        </h6>
                                                        <span className="testimonial-position">
                                                            Book Lovers
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div
                                            className="testimonial-1 wow fadeInUp"
                                            data-wow-delay="0.6s"
                                        >
                                            <div className="testimonial-info">
                                                <ul className="dz-rating">
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-yellow"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                    <li>
                                                        <i className="flaticon-star text-muted"></i>
                                                    </li>
                                                </ul>
                                                <div className="testimonial-text">
                                                    <p>
                                                        Very impresive store.
                                                        Your book made studying
                                                        for the ABC
                                                        certification exams a
                                                        breeze. Thank you very
                                                        much
                                                    </p>
                                                </div>
                                                <div className="testimonial-detail">
                                                    <div className="testimonial-pic">
                                                        <img
                                                            src="assets/picture/testimonial1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="info-right">
                                                        <h6 className="testimonial-name">
                                                            Jason Huang
                                                        </h6>
                                                        <span className="testimonial-position">
                                                            Book Lovers
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-inner-2">
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="title">Latest News</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua
                                    </p>
                                </div>
                                <div className="swiper-container blog-swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-blog style-1 bg-white m-b30 wow fadeInUp"
                                                data-wow-delay="0.1s"
                                            >
                                                <div className="dz-media">
                                                    <a href="blog-detail.html">
                                                        <img
                                                            src="assets/picture/blog41.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info p-3">
                                                    <h6 className="dz-title">
                                                        <a href="blog-detail.html">
                                                            Benefits of reading:
                                                            Smart, Diligent,
                                                            Happy, Intelligent
                                                        </a>
                                                    </h6>
                                                    <p className="m-b0">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing do eiusmod
                                                        tempor
                                                    </p>
                                                    <div className="dz-meta meta-bottom mt-3 pt-3">
                                                        <ul className="">
                                                            <li className="post-date">
                                                                <i className="far fa-calendar fa-fw m-r10"></i>
                                                                24 March, 2022
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-blog style-1 bg-white m-b30 wow fadeInUp"
                                                data-wow-delay="0.2s"
                                            >
                                                <div className="dz-media">
                                                    <a href="blog-detail.html">
                                                        <img
                                                            src="assets/picture/blog32.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info p-3">
                                                    <h6 className="dz-title">
                                                        <a href="blog-detail.html">
                                                            10 Things you must
                                                            know to improve your
                                                            reading skills
                                                        </a>
                                                    </h6>
                                                    <p className="m-b0">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing do eiusmod
                                                        tempor
                                                    </p>
                                                    <div className="dz-meta meta-bottom mt-3 pt-3">
                                                        <ul className="">
                                                            <li className="post-date">
                                                                <i className="far fa-calendar fa-fw m-r10"></i>
                                                                18 July, 2022
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-blog style-1 bg-white m-b30 wow fadeInUp"
                                                data-wow-delay="0.3s"
                                            >
                                                <div className="dz-media">
                                                    <a href="blog-detail.html">
                                                        <img
                                                            src="assets/picture/blog22.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info p-3">
                                                    <h6 className="dz-title">
                                                        <a href="blog-detail.html">
                                                            Benefits of reading:
                                                            Smart, Diligent,
                                                            Happy, Intelligent
                                                        </a>
                                                    </h6>
                                                    <p className="m-b0">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing do eiusmod
                                                        tempor
                                                    </p>
                                                    <div className="dz-meta meta-bottom mt-3 pt-3">
                                                        <ul className="">
                                                            <li className="post-date">
                                                                <i className="far fa-calendar fa-fw m-r10"></i>
                                                                7 June, 2022
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div
                                                className="dz-blog style-1 bg-white m-b30 wow fadeInUp"
                                                data-wow-delay="0.4s"
                                            >
                                                <div className="dz-media">
                                                    <a href="blog-detail.html">
                                                        <img
                                                            src="assets/picture/blog13.jpg"
                                                            alt="/"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="dz-info p-3">
                                                    <h6 className="dz-title">
                                                        <a href="blog-detail.html">
                                                            We Must know why
                                                            reading is important
                                                            for children?
                                                        </a>
                                                    </h6>
                                                    <p className="m-b0">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing do eiusmod
                                                        tempor
                                                    </p>
                                                    <div className="dz-meta meta-bottom mt-3 pt-3">
                                                        <ul className="">
                                                            <li className="post-date">
                                                                <i className="far fa-calendar fa-fw m-r10"></i>
                                                                30 May, 2022
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="content-inner">
                            <div className="container">
                                <div className="row sp15">
                                    <div
                                        className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div className="icon-bx-wraper style-2 m-b30 text-center">
                                            <div className="icon-bx-lg">
                                                <i className="fa-solid fa-users icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dz-title counter m-b0">
                                                    125,663
                                                </h2>
                                                <p className="font-20">
                                                    Happy Customers
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="icon-bx-wraper style-2 m-b30 text-center">
                                            <div className="icon-bx-lg">
                                                <i className="fa-solid fa-book icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dz-title counter m-b0">
                                                    50,672
                                                </h2>
                                                <p className="font-20">
                                                    Book Collections
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="icon-bx-wraper style-2 m-b30 text-center">
                                            <div className="icon-bx-lg">
                                                <i className="fa-solid fa-store icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dz-title counter m-b0">
                                                    1,562
                                                </h2>
                                                <p className="font-20">
                                                    Our Stores
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="icon-bx-wraper style-2 m-b30 text-center">
                                            <div className="icon-bx-lg">
                                                <i className="fa-solid fa-leaf icon-cell"></i>
                                            </div>
                                            <div className="icon-content">
                                                <h2 className="dz-title counter m-b0">
                                                    457
                                                </h2>
                                                <p className="font-20">
                                                    Famous Writers
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            className="py-5 newsletter-wrapper"
                            style={{
                                backgroundImage:
                                    "url('assets/picture/bg1.jpg')",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="container">
                                <div className="subscride-inner">
                                    <div className="row style-1 justify-content-xl-between justify-content-lg-center align-items-center text-xl-start text-center">
                                        <div
                                            className="col-xl-7 col-lg-12 wow fadeInUp"
                                            data-wow-delay="0.1s"
                                        >
                                            <div className="section-head mb-0">
                                                <h2 className="title text-white my-lg-3 mt-0">
                                                    Subscribe our newsletter for
                                                    newest books updates
                                                </h2>
                                            </div>
                                        </div>
                                        <div
                                            className="col-xl-5 col-lg-6 wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            <form
                                                className="dzSubscribe style-1"
                                                action="script/mailchamp.php"
                                                method="post"
                                            >
                                                <div className="dzSubscribeMsg"></div>
                                                <div className="form-group">
                                                    <div className="input-group mb-0">
                                                        <input
                                                            name="dzEmail"
                                                            required
                                                            type="email"
                                                            className="form-control bg-transparent text-white"
                                                            placeholder="Your Email Address"
                                                        />
                                                        <div className="input-group-addon">
                                                            <button
                                                                name="submit"
                                                                value="Submit"
                                                                type="submit"
                                                                className="btn btn-primary btnhover"
                                                            >
                                                                <span>
                                                                    SUBSCRIBE
                                                                </span>
                                                                <i className="fa-solid fa-paper-plane"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="site-footer style-1">
                        <div className="footer-category">
                            <div className="container">
                                <div className="category-toggle">
                                    <a href="" className="toggle-btn">
                                        Books categories
                                    </a>
                                    <div className="toggle-items row">
                                        <div className="footer-col-book">
                                            <ul>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Architecture
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Art
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Biography
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Body, Mind & Spirit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Business & Economics
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Children Fiction
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Children Non-Fiction
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Comics & Graphics
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Cooking
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Crafts & Hobbies
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Design
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Drama
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Education
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Family & Relationships
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Fiction
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Foreign Language
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Games
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Gardening
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Health & Fitness
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        History
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        House & Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Humor
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Literary Collections
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Mathematics
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Medical
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Nature
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Performing Arts
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Pets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Show others
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-top">
                            <div className="container">
                                <div className="row">
                                    <div
                                        className="col-xl-3 col-lg-12 wow fadeInUp"
                                        data-wow-delay="0.1s"
                                    >
                                        <div className="widget widget_about">
                                            <div className="footer-logo logo-white">
                                                <a href="">
                                                    <img
                                                        src="assets/picture/logo.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                            <p className="text">
                                                Bookland is a Book Store
                                                Ecommerce Website Template by
                                                DexignZone lorem ipsum dolor sit
                                            </p>
                                            <div className="dz-social-icon style-1">
                                                <ul>
                                                    <li>
                                                        <a
                                                            href=""
                                                            target="_self"
                                                        >
                                                            <i className="fa-brands fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href=""
                                                            target="_self"
                                                        >
                                                            <i className="fa-brands fa-youtube"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href=""
                                                            target="_self"
                                                        >
                                                            <i className="fa-brands fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href=""
                                                            target="_self"
                                                        >
                                                            <i className="fa-brands fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp"
                                        data-wow-delay="0.2s"
                                    >
                                        <div className="widget widget_services">
                                            <h5 className="footer-title">
                                                Our Links
                                            </h5>
                                            <ul>
                                                <li>
                                                    <a href="about-us.html">
                                                        About us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact-us.html">
                                                        Contact us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="privacy-policy.html">
                                                        Privacy Policy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="pricing.html">
                                                        Pricing Table
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">FAQ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-2 col-lg-3 col-sm-4 col-4 wow fadeInUp"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="widget widget_services">
                                            <h5 className="footer-title">
                                                Bookland ?
                                            </h5>
                                            <ul>
                                                <li>
                                                    <a href="">Bookland</a>
                                                </li>
                                                <li>
                                                    <a href="services.html">
                                                        Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-detail.html">
                                                        Book Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-detail.html">
                                                        Blog Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="books-grid-view.html">
                                                        Shop
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-4 wow fadeInUp"
                                        data-wow-delay="0.4s"
                                    >
                                        <div className="widget widget_services">
                                            <h5 className="footer-title">
                                                Resources
                                            </h5>
                                            <ul>
                                                <li>
                                                    <a href="services.html">
                                                        Download
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="help-desk.html">
                                                        Help Center
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-cart.html">
                                                        Shop Cart
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-login.html">
                                                        Login
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="about-us.html">
                                                        Partner
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-3 col-lg-3 col-md-12 col-sm-12 wow fadeInUp"
                                        data-wow-delay="0.5s"
                                    >
                                        <div className="widget widget_getintuch">
                                            <h5 className="footer-title">
                                                Get in Touch With Us
                                            </h5>
                                            <ul>
                                                <li>
                                                    <i className="flaticon-placeholder"></i>
                                                    <span>
                                                        832 Thompson Drive, San
                                                        Fransisco CA 94107,US
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="flaticon-phone"></i>
                                                    <span>
                                                        +123 345123 556
                                                        <br />
                                                        +123 345123 556
                                                    </span>
                                                </li>
                                                <li>
                                                    <i className="flaticon-email"></i>
                                                    <span>
                                                        support@bookland.id
                                                        <br />
                                                        info@bookland.id
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="container">
                                <div className="row fb-inner">
                                    <div className="col-lg-6 col-md-12 text-start">
                                        <p className="copyright-text">
                                            Bookland Book Store Ecommerce
                                            Website - © 2022 All Rights Reserved
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-md-12 text-end">
                                        <p>
                                            Made with{" "}
                                            <span className="heart"></span> by
                                            <a href="">bootstrapMB</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                    <button className="scroltop" type="button">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>

                <script src="src/assets/js/jquery.min.js"></script>
                <script src="src/assets/js/wow.min.js"></script>
                <script src="src/assets/js/bootstrap.bundle.min.js"></script>
                <script src="src/assets/js/bootstrap-select.min.js"></script>
                <script src="src/assets/js/waypoints-min.js"></script>
                <script src="src/assets/js/counterup.min.js"></script>
                <script src="src/assets/js/swiper-bundle.min.js"></script>
                <script src="src/assets/js/dz.carousel.js"></script>
                <script src="src/assets/js/dz.ajax.js"></script>
                <script src="src/assets/js/custom.js"></script>
            </body>
        </html>
    );
};
export default Test;
