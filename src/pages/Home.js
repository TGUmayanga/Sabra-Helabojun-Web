import React from 'react'

import { Link } from 'react-router-dom';
import BannerImage from '../assets/bea.jpg';
import "../styles/home.css";
import '../styles/footer.css'

function Home() {
  return (
    <div className='home'  style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>Sabra's Helabojun </h1>
        <p>REAL TASTE OF PARADISE</p>
        <Link to='/menu'>
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
