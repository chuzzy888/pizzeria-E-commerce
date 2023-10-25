import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61ileac', 'template_f8kgehk', form.current, 'CLsUaKLMeSlDzshZ4')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent !");
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='info'>

      <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <h1 className='chizu'>Leave Us A Message *</h1>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" />
        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <input type="submit" value="Send" className="submit-button" />
      </form>
    </div>
  )

}

export default Contact
