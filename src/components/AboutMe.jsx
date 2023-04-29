import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../css/AboutMe.css';
import "animate.css/animate.min.css";

const AboutMe=()=>{

  return(
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <section id='aboutMe'>
        <div className='aboutMeContainer'>
          <div>
            <h2><span>01. </span>About Me</h2>
          </div>
          <div className='aboutContent'>
            <p>
              I'm an experienced Full-Stack developer with a strong background in customer service and a proven ability to deliver high-quality, innovative web applications. 
              Skilled in various programming languages including JavaScript, Python, and Java, as well as popular technologies such as React, Django, Angular, Node.js, and Express. 
              Strong understanding of database management, including PostgreSQL, MongoDB, and Firebase. Adept at troubleshooting and resolving technical issues, and able to work effectively in 
              a team environment. A dedicated professional with a strong ability to understand and meet customer needs, resulting in the successful delivery of projects.
            </p>
          </div>
        </div>
      </section>
    </AnimationOnScroll>

  )
}

export default AboutMe