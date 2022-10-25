import React from 'react'
import './About.css'
import ME from '../../assets/tan.png'
import { FaAward, FaUsers } from 'react-icons/fa'
import { TbBrowserCheck } from 'react-icons/tb'

const About = () => {
  return (
    <section id='about' className='abouts'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h1>Experience</h1>
              <small>4th year BS IT Student </small>
            </article>
            <article className='about_card'>
              <TbBrowserCheck className='about_icon' />
              <h1>Projects</h1>
              <small>2 Projects</small>
            </article>
            <article className='about_card'>
              <FaUsers className='about_icon' />
              <h1>Organization</h1>
              <small>College Student Council Secretary</small>
            </article>
          </div>
          <p>A hard-working and visionary 4th year IT student with a passion for wed design and development. Graphic Designing is my other passion and worked with numerous clients as a photo and video editor.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About