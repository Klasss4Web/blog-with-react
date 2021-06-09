import React from 'react';
import logoImage from '../src/assets/IMG-20210325-WA0006.jpg'
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="full-container">
    <div className="logo-container">
      <img src={logoImage} alt="logoImage" />
    </div>
    <div className="nav-div clearFix">
      <nav className="nav-links">
        <ul>
          <li className="link-list">
            <Link className="nav" to="/">Home</Link>
          </li>
          <li className="link-list">
            <Link className="nav" to="/about">About Us</Link>
          </li>
          <li className="link-list">
            <Link className="nav" to="/articles">Articles</Link>
          </li>
          <li className="link-list">
            <Link className="nav" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  
)

export default NavBar;