import React from 'react'
import './Footer.css'
import {BsFacebook, BsInstagram, BsBehance} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#h" className='footer_logo'>TAN</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#serv">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="www.facebook.com/tanmmaryjoy/" target="_blank"><BsFacebook/></a>
        <a href="www.instagram.com/umayunchan/" target="_blank"><BsInstagram/></a>
        <a href="www.behance.net/tanmaryjoy" target="_blank"><BsBehance/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; TanMaryjoy. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer