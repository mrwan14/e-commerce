import React from 'react'
import logo from '../../images/logo.png';
import './Footer.css' 

export default function Footer() {
  return (
    <div >
        <div className="footer d-flex justify-content-between p-5" >
            <p className='lead'>Developed by <a href="#">MARWAN TAHA</a></p>
            <img src={logo} alt="Logo" />
            <p className='lead'>Fork this project  <a href="#">HERE</a></p>
        </div>
    </div>
  )
}
