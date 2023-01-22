import React from 'react'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'
import '../scss/App.css'

const Home=()=>{
  return(
    <div>
      <div className='welcome'>
        <div className='welcomeContainer'>
          <p>Hey! My name's</p>
          <h1>Efrain Encarnacion</h1>
          <h2> I'm a Full-Stack Developer from Orlando!</h2>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Home