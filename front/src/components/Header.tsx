import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import type { MouseEvent } from "react";

import Menu from './Menu';
import Logo from '../assets/portfolio.png'
import { smoothScrollTo } from '../utils/utils';

export function Header({ isStartScrolled, isMediumScreen } : { isStartScrolled: boolean, isMediumScreen: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setisMenuClosing] = useState(false);

  const navigate = useNavigate();

  function onMenuOpen() {
    if(isMenuOpen) {
      setisMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setisMenuClosing(false);
      }, 400);
    } else {
      setIsMenuOpen(true);
    }
  }

  function handleLogoClick(e: MouseEvent<HTMLAnchorElement>) {
      e.preventDefault();
      
      // Wait for the scroll to finish before navigate
      smoothScrollTo(0, 500, undefined, () => {
        navigate('/');
      });
  }

  return (
      <header className={ isStartScrolled ? 'header--scrolled' : ''}>
        <div className='header__sup'>
          <Link to="/" onClick={handleLogoClick}>
            <img src={Logo} alt="Logo" className='logo'/>
          </Link>
          {isMediumScreen ? (
            <Menu className="" onMenuOpen={() => {}}/>
          ) : (
            <button type="button" onClick={onMenuOpen} className="burger-btn"></button>
          )}
        </div>
        {!isMediumScreen && isMenuOpen && (
          <Menu className={isMenuClosing ? "closing open-burger burger" : isMenuOpen ? "open-burger burger" : " burger"} onMenuOpen={onMenuOpen}/>
        )}
        <div className='header__sub'>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </header>
  )
}