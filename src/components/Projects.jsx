import React from 'react'
import '../css/Projects.css'

const Projects=()=>{
  return(
    <div id='projects'>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h2 className='sectionTitle'>03. Projects</h2>
        <br></br>
      </div>
      <div className='mainProjects'>
        <div className='projectCard'>
          <img className='TLimg' src='https://i.gyazo.com/a58e1fdb0a1a097b63abbab19b7741cd.jpg' />
          <div className='projectInfo'>
            <h2>Travelogue</h2>
            <p>
              A Full stack travel app that helps you plan, track and log your trips w/OAuth2.0 for Google Authentication
            </p>            
            <p className='projTech'>
              Tech: Django, Python, OAuth2.0, PostgreSQL, Bootstrap
            </p>
            <div className='projLinks'>
              <a target="_blank" href='https://travelogue.herokuapp.com'>[Demo]</a>
              <a target="_blank" href='https://github.com/evanenc/travelogue'>[GitHub]</a>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <img className='FBimg' src='https://i.gyazo.com/13e2920de1b35e6b31e236490f445bdc.png' />
          <div className='projectInfo'>
            <h2>FotoBook</h2>
            <p>
              A Full stack app collaboration that recreates the Instagram user experience. Utilizing MERN stack and JWT Authentication. 
              Complete with full CRUD operations hitting all RESTful API calls.
            </p>
            <p className='projTech'>
              Tech: MERN Stack, JavaScript, HTML, CSS
            </p>
            <div className='projLinks'>
              <a target="_blank" href='https://fotobook-dark.netlify.app/'>[Demo]</a>
              <a target="_blank" href='https://github.com/evanenc/project-3-fe/tree/efrain_dev'>[GitHub]</a>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <img className='HHimg' src='https://camo.githubusercontent.com/81f8a71f750107cd04914867f2d42645934782171a222a26a287018d8708b386/68747470733a2f2f696d6775722e636f6d2f43784558506b442e6a7067' />
          <div className='projectInfo'>
            <h2>HAPI HOUR</h2>
            <p>
              A React app collaboration that utilizes API calls to provide the user with any cocktail of various categories.
            </p>
            <p className='projTech'>
              Tech: React, JavaScript, HTML, CSS
            </p>
            <div className='projLinks'>
              <a target="_blank" href='https://HAPI-HOUR.netlify.app/'>[Demo]</a>
              <a target="_blank" href='https://github.com/cbowman422/hapi-hour'>[Repo]</a>
            </div>
          </div>
        </div>
        <div className='projectCard'>
        <img className='SSimg' src='https://camo.githubusercontent.com/19afd36991f68237a6c4bde3b927b9fa6298d1bb5e920e3dd444fadc7b15753b/68747470733a2f2f692e6779617a6f2e636f6d2f63386333393038613036303031383938663263626362316535623338656431332e6a7067' />
          <div className='projectInfo'>
            <h2>Simon Says</h2>
            <p>
              A classic Windows themed Simon Says game! Created with JS, HTML, and CSS, This was the very first game that I created to start my journey as a software developer! 
            </p>
            <p className='projTech'>
              Tech: JavaScript, HTML, CSS
            </p>
            <div className='projLinks'>
              <a target="_blank" href='https://evanenc.github.io/Project-1-Game/'>[Demo]</a>
              <a target="_blank" href='https://github.com/evanenc/Project-1-Game'>[GitHub]</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects