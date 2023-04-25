import React from 'react'
import '../css/Header.css'

const Header=()=>{
  return(
    <section className='header'>
      <a href="#aboutMe">01. About</a>
      <a href="#projects">02. Projects</a>
      <a href="#contact">03. Contact</a>
      <a id='resume' href='https://docs.google.com/document/d/10W3QkQ4qblCWNu1jrTB4JLTZrNNZWe4EXcJhQmd-hbw/edit?usp=sharing'>Resume</a>
    </section>
  )
}

export default Header