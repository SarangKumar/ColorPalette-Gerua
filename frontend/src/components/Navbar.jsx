import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <h3>
        COLOR <b>UI</b>
      </h3>
      <ul>
        <li><NavLink to='/' className={( isActive ) => (isActive && 'navlink-active')}>Home</NavLink></li>
        <li><NavLink to='/solid-color' className={( isActive ) => (isActive && 'navlink-active')}>Solid Colors</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header