import React from 'react'
import './About.css'
import ME from '../../assets/tan.png'
import { FaAward, FaUsers } from 'react-icons/fa'
import { TbBrowserCheck } from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
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
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUsers className='about_icon' />
              <h1>Clients</h1>
              <small>300+</small>
            </article>
            <article className='about_card'>
              <TbBrowserCheck className='about_icon' />
              <h1>Projects</h1>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, ex animi! Maxime, accusamus a saepe quibusdam corrupti hic? Temporibus recusandae quos ratione nesciunt quod accusantium, dolorem adipisci aliquid reiciendis quibusdam?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About