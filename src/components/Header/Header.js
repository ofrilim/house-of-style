import React from 'react';
import './Header.scss';
import langIcon1 from './languageIcon.svg';
import langIcon from './languageIcon.png';

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="options">
            <a href="#home">Info</a>
            <a href="#appartments">Appartments</a>
            <a href="#contact">Contact</a>
          </div>
          <img src={langIcon} alt="languages icon" 
            style={{width: '2rem', height: '2rem', cursor: 'pointer', padding: '0 2rem'}}
          />
        </nav>
      </header>
    </>
  )
}
