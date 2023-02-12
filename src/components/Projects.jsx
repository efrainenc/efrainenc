import React from 'react'
import '../scss/Projects.css'

const Projects=()=>{
  return(
    <div className='projects'>
      <h2>Projects W.I.P.</h2>
      <div className='mainProjects'>
        <div className='projectCard'>
          <img className='TLimg' src='https://i.gyazo.com/a58e1fdb0a1a097b63abbab19b7741cd.jpg' />
          <h2>Travelogue</h2>
          <a href='https://travelogue.herokuapp.com'>Link to site</a>
          <p>
            Full-stack travel app for those who love to travel that helps you plan and log your trips
            Deployed a full stack application to Heroku utilizing Django + Bootstrap with full CRUD within a 1 week sprint.
            Utilized Django AllAuth to implement OAuth2.0 Google Authentication and allow for the future implementation of Google API's.
            Exhibited an advanced understanding of Authentication, Python, and PostgreSQL.
            Developed a robust and scalable backend system using Python, Django, and PostgreSQL.
          </p>
          <p>
          Django, Python, PostgreSQL, OAuth2.0, Bootstrap
          </p>
        </div>
        <div className='projectCard'>
          <img className='FBimg' src='https://i.gyazo.com/13e2920de1b35e6b31e236490f445bdc.png' />
          <h2>Fotobook</h2>
          <a href='https://fotobook-dark.netlify.app/'>Link to site</a>
          <p>
            Full-stack app collaboration that recreates the Instagram user experience 
            Collaborated to utilize a MERN stack (MongoDB, Express, React.js, Node.js) to build a full stack application in 3 days. 
            Implemented JWT Authentication to allow user logins.
            Completed full CRUD operations hitting all RESTful API calls.
            Created an application with a mobile-first approach and styled using Styled-Components and CSS3 with flexbox layouts.
          </p>
          <p>
          MERN Stack, JS, HTML, CSS
          </p>
        </div>
        <div className='projectCard'>
          <img className='HHimg' src='https://camo.githubusercontent.com/81f8a71f750107cd04914867f2d42645934782171a222a26a287018d8708b386/68747470733a2f2f696d6775722e636f6d2f43784558506b442e6a7067' />
          <h2>HAPI HOUIR</h2>
          <a href='https://HAPI-HOUR.netlify.app/'>Link to site</a>
          <p>
            React, JS, API Integration
            React app that utilizes API calls to provide the user with any cocktail of various categories
            Collaborated to deploy a live React app using Netlify to create a user-friendly and responsive layout for users.
            Utilized API calls to load all available cocktails by their ingredients and names.
            Designed a web page utilizing React.js to make multiple calls to a third party API.
            Optimized the component structure to be DRY.
            Displayed a high level understanding of React.js, JavaScript, HTML and CSS.
          </p>
        </div>
        <div className='projectCard'>
          <p>Hackathon apps</p>
          <p>Simon Says</p>
        </div>
      </div>
    </div>
  )
}

export default Projects