import React from 'react'
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2hntntr', 'template_e1mr5e5', form.current, 'H7WPFt3nkHXhYugUL')

    e.target.reset()
  }
  return (
    <section id='contact' className='contactss'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>tanmaryjoydoroliat@yahoo.com</h5>
            <a href="mailto:tanmaryjoydoroliat@yahoo.com" target="_blank" rel="noreferrer">Send an Email</a>
          </article>
          <article className='contact_option'>
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Maryjoy Tan</h5>
            <a href="https://www.messenger.com/t/100002857576909" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact_option'>
            <FiInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>umayunchan</h5>
            <a href="https://www.instagram.com/umayunchan/" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact