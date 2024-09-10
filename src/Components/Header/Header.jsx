import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
 
    <div className='d-flex bg-white text-dark  justify-content-around align-items-center container '>      
        <div>
            <img src='./src/assets/logo.jpeg' alt='logo' />
        </div>

        <div>
            <ul className='d-flex list-unstyled'>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='/home'>Home</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='/about'>About</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='/course-offering'>Course Offering</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='/course-calender'>Course Calender</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='/stories'>Stories</Link></li>
                <li className='ms-3 mt-2'><Link className='text-decoration-none text-dark' to='/contact'>Contact</Link></li>
                <li className='ms-3 mt-2 btn btn-info'><Link className='text-decoration-none text-dark' to='/register'>Register</Link></li>
            </ul>            
        </div>                    
    </div>
        
  )
}

export default Header;
