import { Link } from 'react-router'
import Logo from '../assets/portfolio.png'
import { useState } from 'react'
import Menu from './Menu';

export function Header({ isStartScrolled, isMediumScreen } : { isStartScrolled: boolean, isMediumScreen: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
      <header className={ isStartScrolled ? 'header--scrolled' : ''}>
        <div className='header__sup'>
          <Link to="/">
            <img src={Logo} alt="Logo" className='logo'/>
          </Link>
          {isMediumScreen ? (
            <Menu className=""/>
          ) : (
            <button type="button" onClick={onMenuOpen} className="burger-btn"></button>
          )}
        </div>
        {!isMediumScreen && isMenuOpen && (
          <Menu className="open-burger"/>
        )}
        <div className='header__sub'>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </header>
  )
}