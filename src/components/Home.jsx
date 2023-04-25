import React from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ContactMe from './ContactMe'
import Projects from './Projects'
import '../css/App.css'

const Home=()=>{
  return(
    <section id='home'>
      <div className='banner'>
        <div id='welcome'>
          <div className='welcomeContainer'>
            <h2>Hey! I'm</h2>
            <h1 id='text'>Evan Encarnacion</h1>
            <h1>A Full-Stack Developer from Orlando!</h1>
          </div>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </section>
  )
}

export default Home