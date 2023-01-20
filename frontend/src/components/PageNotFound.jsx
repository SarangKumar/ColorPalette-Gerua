import React from 'react'
import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div className='not-found-container'>

      <div className='page-not-found'>
        <h2>404</h2>
        <p>This page could not be found.</p>
      </div>
      <div className='links'>
        <button><Link to='/'>Go to Home</Link></button>
      </div>
    </div>
  )
}

export default PageNotFound