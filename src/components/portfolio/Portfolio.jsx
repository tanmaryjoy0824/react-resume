import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/react-resume.png'

const data = [
  {
    id: 1,
    image: img1,
    title: 'My Online Resume',
    link: 'https://github.com/tanmaryjoy0824/react-resume.git',
    demo: 'https://maryjoytan-online-resume.netlify.app/'
  }
  // ,
  // {
  //   id: 2,
  //   image: SAMPLE,
  //   title: 'Sample',
  //   link: 'www.google.com',
  //   demo: 'www.youtube.com'
  // },
  // {
  //   id: 3,
  //   image: SAMPLE,
  //   title: 'Sample',
  //   link: 'www.google.com',
  //   demo: 'www.youtube.com'
  // },
  // {
  //   id: 4,
  //   image: SAMPLE,
  //   title: 'Sample',
  //   link: 'www.google.com',
  //   demo: 'www.youtube.com'
  // },
  // {
  //   id: 5,
  //   image: SAMPLE,
  //   title: 'Sample',
  //   link: 'www.google.com',
  //   demo: 'www.youtube.com'
  // },
  // {
  //   id: 6,
  //   image: SAMPLE,
  //   title: 'Sample',
  //   link: 'www.google.com',
  //   demo: 'www.youtube.com'
  // }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, link, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={link} className='btn'  target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio