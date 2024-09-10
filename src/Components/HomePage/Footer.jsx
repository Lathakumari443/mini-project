import React from 'react';
import './Footer.css';
import{ Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo-container">
                <img src='/src/assets/logo.jpeg' alt="Logo" className="logo" />
            </div>

            <nav className="footer-nav">

                <ul className='d-flex list-unstyled' >
                    <li className='ms-3 mt-2'><Link  to='/home'>Home</Link></li>
                    <li className='ms-3 mt-2'><Link  to='/about'>About</Link></li>
                    <li className='ms-3 mt-2'><Link  to='/course-offering'>Course Offering</Link></li>
                    <li className='ms-3 mt-2'><Link  to='/course-calender'>Course Calender</Link></li>
                    <li className='ms-3 mt-2'><Link  to='/stories'>Stories</Link></li>
                    <li className='ms-3 mt-2'><Link  to='/contact'>Contact</Link></li>
                    <li className='ms-3 mt-2'><Link  to='/register'>Register</Link></li>
                </ul>

            </nav>
        </footer>
    );
}

export default Footer;
