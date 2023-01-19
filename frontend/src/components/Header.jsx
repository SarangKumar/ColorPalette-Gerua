import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
        <h3>
            COLOR <b>UI</b>
        </h3>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/solid-color'>Solid Colors</Link></li>
        </ul>
        {/* <div>
        </div> */}
    </nav>
  )
}

export default Header