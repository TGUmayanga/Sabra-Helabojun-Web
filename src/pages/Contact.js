import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}>Hwllo</div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter your name' type='text' />

                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Your email' type='email' />

                <label htmlFor='message'>Message</label>
                <textarea rows={6} placeholder='Enter Message' name='message' required></textarea>

                <button type='submit'>Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
