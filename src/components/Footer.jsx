import React from 'react'
import '../css/Footer.css'

const Footer=()=>{
  return(
    <section className='footer'>
      <a href="https://linkedin.com/in/evanencarnacion" target="blank">
        <img align="center" 
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" 
            alt="LinkedIn" 
            height="32" 
            width="32" />
      </a>
      <a href="https://github.com/evanenc" target="blank">
        <img align="center" 
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              alt="GitHub" 
              height="32" 
              width="32" />
      </a>
    </section>
  )
}

export default Footer