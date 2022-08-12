import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
        <div className='nav-bar'>
          <div className='logo-container'>
            <Link to={'/'} className="logo">
              <span>CRUD ROUTING</span>
            </Link>
          </div>
          <div className='nav-menu'>
            <Link to={'/courses/'} className='nav-link'>
              <span>Courses</span>
            </Link>
            <Link to={'/shop/'} className='nav-link'>
              <span>Buy</span>
            </Link>
            <Link to={'/aboutus/'} className='nav-link'>
              <span>About us</span>
            </Link>
            <Link to={'/contactus/'} className='nav-link'>
              <span>Contact us</span>
            </Link>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Header