import React, { useEffect, useState } from 'react'
import Values from 'values.js'
import Hero from './Hero';
import { MdContentCopy } from 'react-icons/md';
import { useParams } from 'react-router-dom';


const Tint = () => {

  const colorHex = useParams().colorHex;

  console.log(colorHex);

  const [color, setColor] = useState(`#${colorHex}`);
  const [tintList, setTintList] = useState(new Values(color).tints(4));
  const [shadeList, setShadeList] = useState(new Values(color).shades(4));

  const handleTintShade = (e) => {
    e.preventDefault();
    console.log(color);

    setTintList(new Values(color).tints(4));
    setShadeList(new Values(color).shades(4));
    console.log(tintList);
    console.log(shadeList);

  }


  return (
    <div className='tint-shade-container'>
      <Hero
        heading={"Tint and Shade Generator"}
        para1={"Generate color shades online."}
        para2={"Enter Hex code or pick color and get different tint and shades"} />

      <form onSubmit={handleTintShade}>
        <input type="color" className='input-color' value={color} onChange={e => setColor(e.target.value)} />
        <input type="text" value={color} onChange={e => (e.target.value)} className='input-text' />
        <input type="submit" value="Submit" className="input-btn" />
      </form>


      <div className="container">

        <div className="title">
          <h1>Tints</h1>
        </div>

        <div className='tint-color-box'>
          {tintList.map((colorObj, index) => {

            const type = colorObj.type;
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

          {shadeList.map((colorObj, index) => {

            const type = colorObj.type;
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




const TintColor = ({ rgb, weight }) => {
  return (
    <div className='tint-color' style={{ backgroundColor: `${rgb}` }} >
      <MdContentCopy className='copy-icon' size={24} onClick={() =>
        navigator.clipboard.writeText(rgb)
      } />
      <div className="data">
        weight: {weight}
      </div>
    </div>
  )
}

const ShadeColor = ({ rgb, weight }) => {
  return (
    <div className='shade-color' style={{ backgroundColor: `${rgb}` }} >
      <MdContentCopy className='copy-icon' size={24} onClick={() =>
        navigator.clipboard.writeText(rgb)
      } />
      <div className="data">
        weight: {weight}
      </div>
    </div>
  )
}