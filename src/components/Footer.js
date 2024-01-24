import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

import TwitterIcon from '@mui/icons-material/Twitter';
import FaceBookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/footer.css";
 

function Footer() {
  return (
    <div className='footer' > 
    <div className='socialMedia'>
        <InstagramIcon /> <TwitterIcon /> <FaceBookIcon /> <LinkedInIcon />
    <p> &copy; 2024 pedrotechPizza.com </p>
    </div>
      
    </div>
  )
}

export default Footer
