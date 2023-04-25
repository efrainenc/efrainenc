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
      <h1><span>04. </span>Contact Me</h1>

      <h2>evanencarnacion3@gmail.com</h2>
    </section>
  )
}

export default ContactMe