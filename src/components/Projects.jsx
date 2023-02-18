import React from 'react'
import '../scss/Projects.css'

const Projects=()=>{
  return(
    <div className='projects'>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 className='sectionTitle'>Projects</h1>
        <hr></hr>
        <br></br>
      </div>
      <div className='mainProjects'>
        <div className='projectCard'>
          <img className='TLimg' src='https://i.gyazo.com/a58e1fdb0a1a097b63abbab19b7741cd.jpg' />
          <div className='travelogue'>
            <h2>Travelogue</h2>
            <p>
              A Full stack travel app that helps you plan, track and log your trips w/OAuth2.0 for Google Authentication
            </p>            
            <div className='projIcons'>
              <code><img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django" title="Django" /></code>
              <code><img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" title="Python" /></code>
              <code><img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" title="PostgreSQL" /></code>
              <code><img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" title="Bootstrap" /></code>
              <code><img height='36' src="https://www.stonebranch.com/integration-hub/media/d5/72/11/1642677735/Oauth%202.0_Vendor_Product_Logo.svg" alt="OAuth2" title="OAuth2" /></code>
            </div>
            <div className='projLinks'>
              <a target="_blank" href='https://travelogue.herokuapp.com'>Demo</a>
              <a target="_blank" href='https://github.com/efrainenc/travelogue'>Repo</a>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          {/* <img className='FBimg' src='https://i.gyazo.com/13e2920de1b35e6b31e236490f445bdc.png' /> */}
          <img className='FBimg' src='https://i.gyazo.com/9bd5012fc0a9df00664a730669fd3010.png' />  
          <div className='fotobook'>
            <h2>FotoBook</h2>
            <p>
              A Full stack app collaboration that recreates the Instagram user experience. Utilizing MERN stack and JWT Authentication. 
              Complete with full CRUD operations hitting all RESTful API calls.
            </p>
            <div className='projIcons'>
              <code><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongoDB" title="mongoDB" /></code>
              <code><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express" title="Express" /></code>
              <code><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" title="React" /></code>
              <code><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" title="Node.js" /></code>
              <code><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" title="JavaScript" /></code>
              <code><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" title="HTML" /></code>
              <code><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" title="CSS" /></code>
              <code><img height='36' src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" /></code>
            </div>
            <div className='projLinks'>
              {/* <a target="_blank" href='https://fotobook-dark.netlify.app/'>Demo</a> */}
              <a target="_blank" href='https://foto-book.netlify.app/'>Demo</a>
              <a target="_blank" href='https://github.com/efrainenc/project-3-fe/tree/efrain_dev'>Repo</a>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <img className='HHimg' src='https://camo.githubusercontent.com/81f8a71f750107cd04914867f2d42645934782171a222a26a287018d8708b386/68747470733a2f2f696d6775722e636f6d2f43784558506b442e6a7067' />
          <div className='hapihour'>
            <h2>HAPI HOUR</h2>
            <p>
              A React app collaboration that utilizes API calls to provide the user with any cocktail of various categories.
            </p>
            <div className='projIcons'>
              <code><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" title="React" /></code>
              <code><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" title="JavaScript" /></code>
              <code><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" title="HTML" /></code>
              <code><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" title="CSS" /></code>
              <code><img height='36' src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="REST" title="REST" /></code>
            </div>
            <div className='projLinks'>
              <a target="_blank" href='https://HAPI-HOUR.netlify.app/'>Demo</a>
              <a target="_blank" href='https://github.com/cbowman422/project-2'>Repo</a>
            </div>
          </div>
        </div>
        <div className='projectCard'>
        <img className='SSimg' src='https://camo.githubusercontent.com/19afd36991f68237a6c4bde3b927b9fa6298d1bb5e920e3dd444fadc7b15753b/68747470733a2f2f692e6779617a6f2e636f6d2f63386333393038613036303031383938663263626362316535623338656431332e6a7067' />
          <div className='hapihour'>
            <h2>Simon Says</h2>
            <p>
              A classic Windows themed Simon Says game! Created with JS, HTML, and CSS, This was the very first game that I created to start my journey as a software developer! 
            </p>
            <div className='projIcons'>
              <code><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" title="JavaScript" /></code>
              <code><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" title="HTML" /></code>
              <code><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" title="CSS" /></code>
            </div>
            <div className='projLinks'>
              <a target="_blank" href='https://efrainenc.github.io/Project-1-Game/'>Demo</a>
              <a target="_blank" href='https://github.com/efrainenc/Project-1-Game'>Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects