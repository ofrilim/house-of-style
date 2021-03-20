import React from 'react';
// import logo from './media/house-of-style-logo.png';
import './Header.scss';

export default function Header() {
  return (
    <>
      <header className="header">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <nav className="nav">
          <a href="#">Info</a>
          <a href="#appartments">Appartments</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  )
}
