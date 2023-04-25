import React from 'react'
import '../css/Header.css'

const Header=()=>{
  return(
    <section className='header'>
      <img src='https://www.freeiconspng.com/thumbs/real-clouds-png/real-clouds-png-9.png'/>
      {/* <input type="checkbox" id="active" /> */}
      {/* <label htmlFor="active" className="menu-btn"><span></span></label> */}
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutMe">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Header