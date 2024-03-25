import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo_dark.png';
import '../../assets/css/bootstrap.css';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';
import '../../assets/css/color.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
  return (
    <nav>
      {/* header */}
      <header className='main-header header-style-one style-two'>
        <div className='header-top'>
          <div className='auto-container'>
            <div className='wrapper-box box-style-one'>
              <div className='left-column'>
                <div className='logo-box logoSize '>
                  <a href='/'>
                    <img
                      style={{ width: '150px', height: 'auto' }}
                      src={logoImage}
                      alt='Logo'
                    />
                  </a>
                </div>
              </div>
              <div className='right-column box-style-two'>
                <div className='login'>
                  <a href='#'>Login</a>
                </div>
                <ul className='social-icon box-style-two'>
                  <li>
                    <Link to='/'>首頁</Link>&emsp;|
                  </li>
                  &emsp;
                  <li>
                    <Link to='/used-book-list'>我的二手書</Link> &emsp;|
                  </li>
                  {/* <li>
                    <Link to='/add-used-book'>上架二手書</Link>
                  </li>
                  &emsp; */}
                  <li>
                    <Link to='/member-login'>會員登入</Link> &emsp;|{' '}
                  </li>
                  <li>
                    <Link to='/employee-login'>員工登入</Link> &emsp;|
                  </li>
                  <li>
                    <a href='#'>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: '20px' }}
                      />
                    </a>
                  </li>
                  {/* Other social links */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className='header-divider'
          style={{ height: '3px', backgroundColor: '#be9a78' }}
        ></div>

        {/* <div className="header-upper">
            <div className="auto-container">
                <div className="inner-container">
                    
                    
                    <div className="nav-outer">
                        
                        <div className="mobile-nav-toggler"><img src="assets/images/icons/icon-bar.png" alt=""/></div>

                       
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation">
                                <li className="dropdown"><a href="index.html">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="index-2.html">Home Two</a></li>
                                        <li><a href="index-3.html">Home Three</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About Us </a></li>
                                <li className="dropdown"><a href="#">Rooms</a>
                                    <ul>
                                        <li><a href="room-grid.html">Room Grid Style</a>
                                        </li>
                                        <li><a href="room-list.html">Room List Style</a></li>
                                        <li><a href="room-details.html">Room Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="restaurant.html">Restaurant</a></li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="offers.html">Offers</a></li>
                                        <li><a href="menu.html">Menu</a></li>
                                        <li><a href="places.html">Places</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            </div>
                        </nav>                        
                    </div>
                    <div className="right-column">
                        <div className="search-toggler"><i className="far fa-search"></i></div>
                        <div className="menu-bar sidemenu-nav-toggler"><img src="assets/images/icons/icon-bar3.png" alt=""/></div>
                    </div>                     
                </div>
            </div>
        </div> */}

        <div className='sticky-header'>
          <div className='header-upper'>
            <div className='auto-container'>
              <div className='inner-container'>
                <div className='nav-outer'>
                  <div className='mobile-nav-toggler'>
                    <img src='assets/images/icons/icon-bar.png' alt='' />
                  </div>

                  <nav className='main-menu navbar-expand-md navbar-light'></nav>
                </div>
                <div className='right-column'>
                  <div className='search-toggler'>
                    <i className='far fa-search'></i>
                  </div>
                  <div className='menu-bar sidemenu-nav-toggler'>
                    <img src='assets/images/icons/icon-bar3.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Menu;
