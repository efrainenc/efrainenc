import React from 'react'
import '../scss/Projects.css'

const Projects=()=>{
  return(
    <div className='projects'>
      <h2 className='sectionTitle'>Projects W.I.P.</h2>
      <div className='mainProjects'>
        <div className='projectCard'>
          <img className='TLimg' src='https://i.gyazo.com/a58e1fdb0a1a097b63abbab19b7741cd.jpg' />
          <div className='travelogue'>
            <h2>Travelogue</h2>
            <p>
              Travelogue Full stack travel app for those who love to travel that helps you plan and log your trips
              Deployed a full stack application to Heroku utilizing Django + Bootstrap with full CRUD within a 1 week sprint.
              Utilizes Django AllAuth to implement OAuth2.0 Google Authentication and allow for the future implementation of Google API's.
              Exhibited an advanced understanding of Authentication, Python, and PostgreSQL.
              Developed with a robust and scalable backend system using Python, Django, and PostgreSQL.
            </p>
            <div>
              <a href='https://travelogue.herokuapp.com'>Demo</a>
              <a href='https://travelogue.herokuapp.com'>Repo</a>
            </div>
            <div className='projIcons'>
              <code><img height="32" src="data:image/png;base64,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" alt="Django" title="Django" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python" /></code>
              <code><img height="36" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL" /></code>
              <code><img height="42" src="https://www.stonebranch.com/integration-hub/media/d5/72/11/1642677735/Oauth%202.0_Vendor_Product_Logo.svg" alt="OAuth2" title="OAuth2" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap" /></code>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <img className='FBimg' src='https://i.gyazo.com/13e2920de1b35e6b31e236490f445bdc.png' />
          <div className='fotobook'>
            <h2>FotoBook (Dark)</h2>
            <p>
              FotoBook is a Full stack app collaboration that recreates the Instagram user experience 
              Where I collaborated to utilize a MERN stack (MongoDB, Express, React.js, Node.js) to build a full stack application in 3 days. 
              We Implemented JWT Authentication to allow user logins.
              Completed full CRUD operations hitting all RESTful API calls.
              Created an application with a mobile-first approach and styled using Styled-Components and CSS3 with flexbox layouts.
            </p>
            <div>
              <a href='https://fotobook-dark.netlify.app/'>Demo</a>
              <a href='https://fotobook-dark.netlify.app/'>Repo</a>
            </div>
            <div className='projIcons'>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="mongoDB" title="mongoDB" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="Express" title="Express" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
              <code><img height="48" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <img className='HHimg' src='https://camo.githubusercontent.com/81f8a71f750107cd04914867f2d42645934782171a222a26a287018d8708b386/68747470733a2f2f696d6775722e636f6d2f43784558506b442e6a7067' />
          <div className='hapihour'>
            <h2>HAPI HOUR</h2>
            <p>
              HAPI HOUR is a react app that utilizes API calls to provide the user with any cocktail of various categories
              Collaborated to deploy a live React app using Netlify to create a user-friendly and responsive layout for users.
              Utilizes API calls to load all available cocktails by their ingredients and names.
              Designed a web page utilizing React.js to make multiple calls to a third party API.
              Optimized the component structure to be DRY.
              Displays a high level understanding of React.js, JavaScript, HTML and CSS.
            </p>
            <div>
              <a href='https://HAPI-HOUR.netlify.app/'>Demo</a>
              <a href='https://HAPI-HOUR.netlify.app/'>Repo</a>
            </div>
            <div className='projIcons'>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript" /></code>
              <code><img height="48" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML" /></code>
              <code><img height="32" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS" /></code>
            </div>
          </div>
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