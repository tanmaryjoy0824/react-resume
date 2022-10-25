import React from 'react'
import {BsFacebook, BsInstagram, BsBehance} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.facebook.com/tanmmaryjoy/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://www.instagram.com/umayunchan/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.behance.net/tanmaryjoy" target="_blank" rel="noreferrer"><BsBehance/></a>
    </div>
  )
}

export default HeaderSocials