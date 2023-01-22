import React from 'react'
import '../scss/Projects.css'

const Projects=()=>{
  return(
    <div className='projects'>
      <h2>Projects</h2>
      <div className='mainProjects'>
        <a href='https://fotobook-dark.netlify.app/'>Fotobook</a>
        <img className='FBimg' src='' />
        <a href='https://HAPI-HOUR.netlify.app/'>HAPI HOUR</a>
        <img className='HHimg' src='https://camo.githubusercontent.com/81f8a71f750107cd04914867f2d42645934782171a222a26a287018d8708b386/68747470733a2f2f696d6775722e636f6d2f43784558506b442e6a7067' />
      </div>
      <div>
        <p>Hackathon apps</p>
        <p>Simon Says</p>
      </div>
    </div>
  )
}

export default Projects