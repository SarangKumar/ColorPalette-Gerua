import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

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
        <p>{props.data.title}</p>
      </div>
    </div>
  )
}

export default PaletteCard