import React from 'react';
import './AboutMe.css'; // Import the CSS file for custom styles


const AboutMe = () => {
  return (
    <div className='d-flex justify-content-around align-items-center mt-100'>

        <div className='AboutMe-img'>
          <img src='./src/assets/Chaitanya sir.jpeg' alt='Background'  />
        </div>
      
        <div className='AboutMe-container mt-2'>
          <div>
              <h2>About me</h2>
          </div>    

          <div className='justify-content-center align-items-center'>
           <p>Your paragraph here. This is where you can add any additional text or description Lorem ipsum?? This is where you can add any additional text or description Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis quas ut iste autem unde id eaque, eos voluptatum possimus necessitatibus delectus esse neque. Nesciunt eos impedit ducimus ipsam nostrum?.</p>           
           </div> 

           <button className='btn btn-info'>
              More Details <i className="fas fa-arrow-right"></i>
           </button>
        
        </div>
      
    
    </div>
  )
}

export default AboutMe;

