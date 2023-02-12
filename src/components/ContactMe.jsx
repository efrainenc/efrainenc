import React from 'react'
import '../scss/ContactMe.css'

const ContactMe=()=>{
  return (
    <div className='contactMe'>
      <p>Contact Me</p>
      <p>Email: Efraine387@gmail.com</p>
      <p>
        <a href="https://linkedin.com/in/efrainencarnacion" target="blank">
          <img align="center" 
               src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" 
               alt="LinkedIn" 
               height="30" 
               width="40" />
        </a>
      </p>
      <p>
        <a href="https://github.com/efrainenc" target="blank">
          <img align="center" 
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                alt="GitHub" 
                height="30" 
                width="40" />
        </a>
      </p>
    </div>
  )
}

export default ContactMe