import React from 'react'
import '../scss/Footer.css'

const Footer=()=>{
  return(
    <section className='footer'>
      <a id='resume' href='https://docs.google.com/document/d/1rEJArSEx_BfIzpfcQiIfO-THYSL2T9Uhcm1lBM5Wfvg/edit?usp=share_link'>My Resume</a>
      <a href="https://linkedin.com/in/efrainencarnacion" target="blank">
        <img align="center" 
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" 
            alt="LinkedIn" 
            height="32" 
            width="32" />
      </a>
      <a href="https://github.com/efrainenc" target="blank">
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