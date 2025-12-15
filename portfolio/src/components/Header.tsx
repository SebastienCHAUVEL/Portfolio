import Logo from '../assets/portfolio.png'

export function Header() {
  return (
      <header>
        <div className='header__sup'>
          <a href="#">
            <img src={Logo} alt="Logo" className='logo'/>
          </a>
        </div>
        <div className='header__sub'>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </header>
  )
}