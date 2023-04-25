import React from 'react'
import '../css/Skills.css'

export const Skills = () => {
  return (
    <section id='skills'>
      <div>
        <h2><span>02. </span>Skills</h2>
      </div>
      <div className='skillsContainer'>
        <div className='skillCategory'>
          <h2>Languages</h2>
          <br></br>
          <div className='skillList'>
            <img className='Python' src='https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54'/>
            <img className='TypeScript' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'/>
            <img className='JavaScript' src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'/>
            <img className='C' src='https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white'/>
            <img className='Java' src='https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white'/>
            <img className='CSS3' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'/>
            <img className='HTML5' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'/>
          </div>
        </div>
        <div className='skillCategory'>
          <h2>Databases</h2>
          <br></br>
          <div className='skillList'>
            <img className='MongoDB' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white'/>
            <img className='Postgres' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'/>
            <img className='MySQL' src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white'/>
            <img className='Firebase' src='https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white'/>
          </div>
        </div>
        <div className='skillCategory'>
          <h2>Frameworks, Platforms and Libraries</h2>
          <br></br>
          <div className='skillList'>
            <img className='React' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'/>
            <img className='ExpressJS' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'/>
            <img className='Django' src='https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white'/>
            <img className='Angular' src='https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white'/>
            <img className='NodeJS' src='https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'/>
            <img className='JWT' src='https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens'/>
            <img className='SASS' src='https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'/>
            <img className='Bootstrap' src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white'/>
            <img className='jQuery' src='https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white'/>
            <img className='NPM' src='https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
