import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { BiZoomIn } from 'react-icons/bi'
// BiZoomIn
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonVariants } from '../utils/Variants'


const PaletteCard = (props) => {

  return (
    <div className='palette-box'>
      <div className='palette'>
        {props.data.colors.map((color, index) => {
          return (
            <motion.div variants={buttonVariants} whileHover='hover' key={index} onClick={() => {
              navigator.clipboard.writeText(color);
              // document.getElementsByClassName('palette-color')[index].innerText = 'copied!';
              // setTimeout(()=>document.getElementsByClassName('palette-color')[index].innerText=color, 1000);
            }} className='palette-color' style={{ backgroundColor: color }}>
              <p>{color.substring(1, 7).toUpperCase()}</p>
            </motion.div>)
        })}

      </div>
      <div className="palette-bottom">
        <button>
          <FaRegHeart size={15} /> <p>{props.data.likes}</p>
        </button>
        <button className='more-info'>
          <Link to={`/palette/${props.data.id}`}><BiZoomIn className='more-info' size={16} /></Link>
        </button>
      </div>
    </div>
  )
}

export default PaletteCard