import React from 'react'
import { NavLink } from 'react-router-dom'
import { pathVariants, svgVariants } from '../utils/Variants'
import { motion } from 'framer-motion'

const Header = () => {

  const updateProgressBar = () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
  }

  document.addEventListener('scroll', updateProgressBar);

  return (
    <>
      <div className="navigation">

        <nav className='header'>
          <NavLink to='/'>
            <motion.svg
              variants={svgVariants} initial='hidden' animate='visible'
              width="133" height="42" viewBox="0 0 135 42" fill="none" xmlns="http://www.w3.org/2000/svg">

              <motion.g variants={svgVariants} initial='hidden' animate='visible' id="Group 1">

                <motion.path variants={pathVariants} initial='hidden' animate='visible'
                  fill="none" stroke="#008AFF"
                  d="M38 20C38 24.0159 36.7275 27.9286 34.3653 31.1762C32.003 34.4239 28.6725 36.8396 24.8518 38.0764C21.031 39.3133 16.9167 39.3077 13.0993 38.0605C9.28198 36.8133 5.95798 34.3887 3.60452 31.1346C1.25107 27.8805 -0.0108028 23.9645 6.96315e-05 19.9486C0.010942 15.9327 1.294 12.0235 3.66504 8.7822C6.03608 5.54094 9.37317 3.1343 13.1972 1.9078C17.0213 0.6813 21.1356 0.698008 24.9495 1.95553L21.5543 12.253C19.9169 11.7131 18.1505 11.7059 16.5087 12.2325C14.8669 12.7591 13.4342 13.7923 12.4162 15.1839C11.3983 16.5754 10.8474 18.2538 10.8428 19.9779C10.8381 21.7021 11.3799 23.3834 12.3903 24.7804C13.4007 26.1775 14.8278 27.2185 16.4667 27.7539C18.1056 28.2894 19.872 28.2918 21.5123 27.7607C23.1527 27.2297 24.5826 26.1926 25.5968 24.7983C26.611 23.404 27.1573 21.7242 27.1573 20H38Z"
                />

                <motion.path
                  variants={pathVariants} initial='hidden' animate='visible'
                  id="ERUA" d="M45.6598 10.195V18.35H54.5498V20.975H45.6598V29.375H55.5998V32H42.4748V7.57H55.5998V10.195H45.6598ZM73.2641 32L67.4541 22.025H63.6041V32H60.4191V7.605H68.2941C70.1375 7.605 71.6891 7.92 72.9491 8.55C74.2325 9.18 75.1891 10.0317 75.8191 11.105C76.4491 12.1783 76.7641 13.4033 76.7641 14.78C76.7641 16.46 76.2741 17.9417 75.2941 19.225C74.3375 20.5083 72.8908 21.36 70.9541 21.78L77.0791 32H73.2641ZM63.6041 19.47H68.2941C70.0208 19.47 71.3158 19.05 72.1791 18.21C73.0425 17.3467 73.4741 16.2033 73.4741 14.78C73.4741 13.3333 73.0425 12.2133 72.1791 11.42C71.3391 10.6267 70.0441 10.23 68.2941 10.23H63.6041V19.47ZM84.8281 7.605V23.04C84.8281 25.21 85.3531 26.82 86.4031 27.87C87.4764 28.92 88.9581 29.445 90.8481 29.445C92.7147 29.445 94.1731 28.92 95.2231 27.87C96.2964 26.82 96.8331 25.21 96.8331 23.04V7.605H100.018V23.005C100.018 25.035 99.6097 26.75 98.7931 28.15C97.9764 29.5267 96.8681 30.5533 95.4681 31.23C94.0914 31.9067 92.5397 32.245 90.8131 32.245C89.0864 32.245 87.5231 31.9067 86.1231 31.23C84.7464 30.5533 83.6497 29.5267 82.8331 28.15C82.0397 26.75 81.6431 25.035 81.6431 23.005V7.605H84.8281ZM119.751 26.575H109.111L107.151 32H103.791L112.611 7.745H116.286L125.071 32H121.711L119.751 26.575ZM118.841 23.985L114.431 11.665L110.021 23.985H118.841Z" fill="black" />
              </motion.g>
            </motion.svg>
          </NavLink>
          <ul>
            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'navlink-active' : null)}>Home</NavLink></li>
            <li><NavLink to='/solid-color' className={({ isActive }) => (isActive ? 'navlink-active' : null)}>Solid Colors</NavLink></li>
            <li><NavLink to={`/tint-and-shade-generator/${Math.random().toString(16).slice(2, 8)}`} className={({ isActive }) => (isActive ? 'navlink-active' : null)}>Tint & Shade Generator</NavLink></li>
          </ul>
        </nav>
        <div id="progress-bar" />
      </div>
    </>
  )
}

export default Header