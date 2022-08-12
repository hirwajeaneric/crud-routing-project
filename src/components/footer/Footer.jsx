import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <React.Fragment>
      <div className='footer'>
        <Link to={'/'} className="logo">
          <span>CRUD ROUTING</span>
        </Link>
        <p className='footer-message'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores hic modi voluptatem fugit magnam soluta assumenda, doloremque repellat pariatur at expedita atque sit alias officia, a ipsam laudantium, voluptates ea.</p>
      </div>
    </React.Fragment>
  )
}

export default Footer