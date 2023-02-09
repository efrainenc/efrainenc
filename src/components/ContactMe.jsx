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
                src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg" 
                alt="GitHub" 
                height="30" 
                width="40" />
        </a>
      </p>
    </div>
  )
}

export default ContactMe