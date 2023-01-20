import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const PaletteCard = (props) => {

  return (
    <div className='palette-box'>
      <div className='palette'>
        {props.data.colors.map((color) => {
          return (<div onClick={() => {
            navigator.clipboard.writeText(color)
          }} className='palette-color' style={{ backgroundColor: color }}>
            <p>{color}</p>
          </div>)
        })}

      </div>
      <div className="palette-bottom">
        <button>
          <FaRegHeart size={20} /> <p>{props.data.likes}</p>
        </button>
        <button className='more-info'>
          <Link to={`/palette/${props.data.id}`}><BsThreeDots className='more-info' size={30} /></Link>
        </button>
      </div>
    </div>
  )
}

export default PaletteCard