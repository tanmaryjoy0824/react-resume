import React from 'react'
import './Serv.css'
import { FiCheck } from 'react-icons/fi'

const Serv = () => {
  return (
    <section id='serv'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serv_container">
        <article className='serv'>
          <div className="serv_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='serv_list'>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Web and Visual Design</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Mobile Responsive</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Content Strategy</p>
            </li>
          </ul>
        </article>
        <article className='serv'>
          <div className="serv_head">
            <h3>Web Development</h3>
          </div>

          <ul className='serv_list'>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Designing User Interfaces and Navigation Menus</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Integrating Front-End to Back-End</p>
            </li>
          </ul>
        </article>
        <article className='serv'>
          <div className="serv_head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='serv_list'>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Logo, Business and Label Design</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Flyers, Brochures, Social Media Banner and Cover</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Powerpoint, Infographic Design</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>3D Modelling, and Animation</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Video Editing, GIF Animation and 2D Animation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Serv