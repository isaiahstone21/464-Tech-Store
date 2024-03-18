import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
      <header className="header">
        <div className="header-content">
          <a href="/" className="brand">Tech Store</a>
          <nav className="navbar">
            <a href="/laptops">Laptops</a>
            <a href="/phones">Phones</a>
            <a href="/desktops">Desktops</a>
          </nav>
        </div>
      </header>
    );
  }  

export default Header;
