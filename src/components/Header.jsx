import React from 'react'
import '../css/Header.css'

const Header=()=>{
  return(
    <section className='header'>
      <a href="#aboutMe"><span>01. </span>About</a>
      <a href="#skills"><span>02. </span>Skills</a>
      <a href="#projects"><span>03. </span>Projects</a>
      <a href="#contactMe"><span>04. </span>Contact</a>
      <a id='resume' href='https://drive.proton.me/urls/0QV9CW26M8#0pMTz1HrMERS' target="_blank">Resume</a>
    </section>
  )
}

export default Header