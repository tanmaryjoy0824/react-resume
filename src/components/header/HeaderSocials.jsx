import React from 'react'
import {BsFacebook, BsInstagram, BsBehance} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="www.facebook.com/tanmmaryjoy/" target="_blank"><BsFacebook/></a>
        <a href="www.instagram.com/umayunchan/" target="_blank"><BsInstagram/></a>
        <a href="www.behance.net/tanmaryjoy" target="_blank"><BsBehance/></a>
    </div>
  )
}

export default HeaderSocials