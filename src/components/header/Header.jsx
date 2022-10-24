import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Maryjoy D. Tan</h1>
        <h5 className="text-light">Information Technology Student</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Maryjoy Tan" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header