import React from 'react'
import './header.css'
import Cta from './Cta'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Dikshant Raj Khadka</h1>
          <h5 className="text-light">Fullstack Developer</h5>

          <Cta />

          <HeaderSocial />

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>

        
        </div>
      </header>
    </div>
  )
}

export default Header;
