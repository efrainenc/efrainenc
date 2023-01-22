import React from 'react'
import '../scss/Header.css'

const Header=()=>{
  return(
    <div className='header'>
      <img src='https://www.freeiconspng.com/thumbs/real-clouds-png/real-clouds-png-9.png'/>
      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn"><span></span></label>
      <label for="active" class="close"></label>
      <div class="wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header