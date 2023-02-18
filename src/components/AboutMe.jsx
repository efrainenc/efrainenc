import React from 'react'
import '../scss/AboutMe.css'

const AboutMe=()=>{
  return(
      <section className='aboutMe'>
        <div className='aboutMeContainer'>
          <div>
            <h1>About Me</h1>
            <hr></hr>
          </div>
          <div className='aboutContent'>
            <p>
              I'm an experienced Full-stack developer with a strong background in customer service and a proven ability to deliver high-quality, innovative web applications. 
              Skilled in various programming languages including JavaScript, Python, and Java, as well as popular technologies such as React, Django, Angular, Node.js, and Express. 
              Strong understanding of database management, including PostgreSQL, MongoDB, and Firebase. Adept at troubleshooting and resolving technical issues, and able to work effectively in 
              a team environment. A dedicated professional with a strong ability to understand and meet customer needs, resulting in the successful delivery of projects.
            </p>
          </div>
        </div>
      </section>
  )
}

export default AboutMe