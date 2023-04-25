import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../css/ContactMe.css'

const ContactMe=()=>{

  // Send the form data to your email using email.js
  // Replace the values with your email.js credentials and template ID
  const SERVICE_ID = 'service_lubivai';
  const TEMPLATE_ID = 'template_syuknew';
  const PUBLIC_KEY = 'Z5VlbAv-CG9M0VNce';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactMe'>
      <h1>Contact Me</h1>

      <h2>Efraine387@gmail.com</h2>
      {/* <form onSubmit={sendEmail}>
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
      </form> */}
    </section>
  )
}

export default ContactMe