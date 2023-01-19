import React from 'react'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'

const Home = () => {
  return (
    <div>
      <p>Hey! My name's</p>
      <h1>Efrain Encarnacion</h1>
      <h2>Full-Stack Developer</h2>
      <p>intro</p>
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Home