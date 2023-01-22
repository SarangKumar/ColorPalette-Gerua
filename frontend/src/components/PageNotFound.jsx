import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'

const PageNotFound = () => {
  const history = useNavigate();
  return (
    <div className='not-found-container'>

      <h1>Oops!</h1>
      <div className='page-not-found'>
        <h2>404</h2>
        <p>This page could not be found.</p>
      </div>
      <div className='links'>
        <button><Link to='/'>Go to Home</Link><AiFillHome /></button>
        <button onClick={()=>history(-1)}>Go Back<IoIosArrowBack /></button>
      </div>
    </div>
  )
}

export default PageNotFound