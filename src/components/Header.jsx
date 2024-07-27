import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header-area style-1">
        <div className="header-logo">
            <Link to="/">
            <img alt="image" src='/images/bg/header-logo.png' />
            </Link>
        </div>
        <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap">
                <Link to="/">
                <img alt="image" src='/images/bg/header-logo.png' />
                </Link>
            </div>
            <div className="menu-close-btn">
                <i className="bi bi-x-lg"></i>
            </div>
            </div>
            <ul className="menu-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/live-auction">Browse Products</Link>
            </li>
            <li>
                <Link to="/auction-details">Auction Details</Link>
            </li>
            <li className="menu-item-has-children">
                <Link to="#">Account</Link>
                <i className="bx bx-plus dropdown-icon"></i>
                <ul className="submenu">
                
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                </ul>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
            <div className="d-lg-none d-block">
            <form className="mobile-menu-form mb-5">
                <div className="input-with-btn d-flex flex-column">
                <input type="text" placeholder="Search here..." />
                <button type="submit" className="eg-btn btn--primary btn--sm">Search</button>
                </div>
            </form>
            <div className="hotline two">
                <div className="hotline-info">
                <span>Click To Call</span>
                <h6>
                    <a href="tel:347-274-8816">+347-274-8816</a>
                </h6>
                </div>
            </div>
            </div>
        </div>
        <div className="nav-right d-flex align-items-center">
            <div className="hotline d-xxl-flex d-none">
            <div className="hotline-icon">
                <img alt="image" src='/images/icons/header-phone.svg' />
            </div>
            <div className="hotline-info">
                <span>Click To Call</span>
                <h6>
                <a href="tel:123-456-789">+123-456-789</a>
                </h6>
            </div>
            </div>
            <div className="search-btn">
            <i className="bi bi-search"></i>
            </div>
            <div className="eg-btn btn--primary header-btn">
            <Link to="/dashboard">My Account</Link>
            </div>
            <div className="mobile-menu-btn d-lg-none d-block">
            <i className="bx bx-menu"></i>
            </div>
        </div>
    </header>
  );
}

export default Header;
