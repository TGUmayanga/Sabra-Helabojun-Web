import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/about.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>Hei Machan </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Sabaragamuwa University of Sri Lanka is a public university located in Belihuloya, Balangoda, Sri Lanka. Established in 1991, it is one of the national universities in the country. The university is known for its commitment to providing high-quality education and research opportunities in various fields.

                Sabaragamuwa University is situated amidst the picturesque landscape of the Sabaragamuwa province, surrounded by hills and natural beauty. The campus is designed to facilitate a conducive learning environment with modern facilities.
            </p>
        </div>

      
    </div>
  )
}

export default About
