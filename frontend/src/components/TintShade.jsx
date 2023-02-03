import React, { useEffect, useState } from 'react'
import Values from 'values.js'
import Hero from './Hero';
import { MdContentCopy } from 'react-icons/md';
import { useParams } from 'react-router-dom';


//toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function copyColor(color) {
  navigator.clipboard.writeText(color);
  toast.success(`${color} copied`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

const Tint = () => {
  const colorHex = useParams().colorHex;

  const [tintNumber, setTintNumber] = useState(24);
  const [shadeNumber, setShadeNumber] = useState(24);
  const [color, setColor] = useState(`#${colorHex}`);
  const [tintList, setTintList] = useState(new Values(color).tints(Math.floor(100 / tintNumber)));
  const [shadeList, setShadeList] = useState(new Values(color).shades(Math.floor(100 / shadeNumber)));

  const handleTintShade = (e) => {
    e.preventDefault();

    setTintList(new Values(color).tints(Math.floor(100 / tintNumber)));
    setShadeList(new Values(color).shades(Math.floor(100 / shadeNumber)));

    // console.log(color);
    // console.log(tintList);
    // console.log(shadeList);
  }

  useEffect(() => {
    setTintList(new Values(color).tints(Math.floor(100 / tintNumber)));
    setShadeList(new Values(color).shades(Math.floor(100 / shadeNumber)));

    // console.log(color);
    // console.log(tintList);
    // console.log(shadeList);
  }, [tintNumber, shadeNumber, color])


  return (
    <div className='tint-shade-container'>
      <Hero
        heading={"Tint and Shade Generator"}
        para1={"Generate color shades online."}
        para2={"Enter Hex code or pick color and get different tint and shades"} />

      <form onSubmit={handleTintShade}>
        <input type="color" className='input-color' value={color} onChange={e => setColor(e.target.value)} />
        <input type="text" value={color} onChange={e => (e.target.value)} className='input-text' />
        {/* <input type="submit" value="Submit" className="input-btn" /> */}
      </form>

      <form className='set-tint-shade-count'>
        <div className="tint-count">
          <label htmlFor="">Set number of <span style={{ color: color }}>Tint</span> Colors</label>
          <input type='number' min="1" max="100" value={tintNumber} onChange={e => setTintNumber(e.target.value)} className='input-number' />
        </div>
        <div className="shade-count">
          <label htmlFor="">Set number of <span style={{ color: color }}>Shade</span>  Colors</label>
          <input type='number' min="1" max="100" value={shadeNumber} onChange={e => setShadeNumber(e.target.value)} className='input-number' />
        </div>
      </form>

      <div className="container">

        <div className="title">
          <h1>Tints</h1>
        </div>

        <div className='tint-color-box'>
          {tintList.map((colorObj, index) => {

            const rgb = `rgb(${colorObj.rgb[0]}, ${colorObj.rgb[1]}, ${colorObj.rgb[2]})`
            const weight = colorObj.weight;

            return (
              <TintColor key={index} rgb={rgb} weight={weight} />
            )
          })}
        </div>

        <div className='title'>
          <h1>Shades</h1>
        </div>

        <div className='shade-color-box'>

          {shadeList.slice(0, shadeNumber).map((colorObj, index) => {

            const rgb = `rgb(${colorObj.rgb[0]}, ${colorObj.rgb[1]}, ${colorObj.rgb[2]})`
            const weight = colorObj.weight;

            return (
              <ShadeColor key={index} rgb={rgb} weight={weight} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tint

// tint box component
const TintColor = ({ rgb, weight }) => {
  return (
    <div className='tint-color' style={{ backgroundColor: `${rgb}` }} >
      <MdContentCopy className='copy-icon' size={24} onClick={() => copyColor(rgb)} />
      <div className="data">
        weight: {weight}
      </div>
    </div>
  )
}

// shade box component
const ShadeColor = ({ rgb, weight }) => {
  return (
    <div className='shade-color' style={{ backgroundColor: `${rgb}` }} >
      <MdContentCopy className='copy-icon' size={24} onClick={() => copyColor(rgb)} />
      <div className="data">
        weight: {weight}
      </div>
    </div>
  )
}