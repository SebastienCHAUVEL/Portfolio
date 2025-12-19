import { Link } from 'react-router'
import Logo from '../assets/portfolio.png'
import { useState } from 'react'
import Menu from './Menu';

export function Header({ isStartScrolled, isMediumScreen } : { isStartScrolled: boolean, isMediumScreen: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setisMenuClosing] = useState(false);

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

  return (
      <header className={ isStartScrolled ? 'header--scrolled' : ''}>
        <div className='header__sup'>
          <Link to="/">
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