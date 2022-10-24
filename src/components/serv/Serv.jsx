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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='serv'>
          <div className="serv_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='serv_list'>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <FiCheck className='serv_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Serv