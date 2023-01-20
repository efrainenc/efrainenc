import React from 'react'
import '../scss/Header.css'

const Header=()=>{
  return(
    <div className='header'>
      <p>Cloud</p>
      <div id="menuToggle">
        <input type="checkbox" />
        {/* a span for each layer of hamburbger */}
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header