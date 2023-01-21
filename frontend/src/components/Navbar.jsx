import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <NavLink to='/'>
        <h3>
          COLOR <b>UI</b>
        </h3>
      </NavLink>
      <ul>
        <li><NavLink to='/' className={({isActive}) => (isActive ? 'navlink-active': null)}>Home</NavLink></li>
        <li><NavLink to='/solid-color' className={({isActive}) => (isActive ? 'navlink-active': null)}>Solid Colors</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header