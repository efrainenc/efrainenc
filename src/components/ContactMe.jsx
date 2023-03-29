import React from 'react'
import '../scss/ContactMe.css'

const ContactMe=()=>{
  return (
    <section id='contactMe'>
      <h1>Contact Me</h1>
      <form action="#" method="POST">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div>
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="email_subject" required/>
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="user_message" required></textarea>
        </div>
        <div>
          <input type="submit" value="Send"/>
        </div>
      </form>
    </section>
  )
}

export default ContactMe