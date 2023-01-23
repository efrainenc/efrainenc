import React from 'react'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Projects from './Projects'
import '../scss/App.css'

const Home=()=>{
  return(
    <div>
      <div className='banner'>
      <div id='welcome'>
        <div className='welcomeContainer'>
          <h2>Hey! I'm</h2>
          <h1 id='text'>Efrain Encarnacion</h1>
          <h1>A Full-Stack Developer from Orlando!</h1>
        </div>
      </div>
        <div className='clouds'>
          <img src='https://imgur.com/SHv65Xg.png' style={{'--i':1}}/>
          <img src='https://imgur.com/JMWLj1a.png' style={{'--i':2}}/>
          <img src='https://imgur.com/YBSwILM.png' style={{'--i':3}}/>
          <img src='https://imgur.com/QpyYxPW.png' style={{'--i':4}}/>
          <img src='https://imgur.com/DfnLXrD.png' style={{'--i':5}}/>
          <img src='https://imgur.com/SHv65Xg.png' style={{'--i':10}}/>
          <img src='https://imgur.com/JMWLj1a.png' style={{'--i':9}}/>
          <img src='https://imgur.com/YBSwILM.png' style={{'--i':8}}/>
          <img src='https://imgur.com/QpyYxPW.png' style={{'--i':7}}/>
          <img src='https://imgur.com/DfnLXrD.png' style={{'--i':6}}/>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Home