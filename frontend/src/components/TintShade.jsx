import React, { useEffect, useState } from 'react'
import Values from 'values.js'
import Hero from './Hero';




const Tint = () => {
  const [color, setColor] = useState('#ff0000');
  const [tintList, setTintList] = useState(new Values(color).tints(4));
  const [shadeList, setShadeList] = useState(new Values(color).shades(4));

  // useEffect(() => {
  //   const randomColor = '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
  //   setColor(randomColor);
  //   console.log(color);


  //   setList(new Values(color).all(10));
  //   console.log(list);
  // }, [])


  const handleTintShade = (e) => {
    e.preventDefault();
    console.log(color);

    setTintList(new Values(color).tints(4));
    setShadeList(new Values(color).shades(4));
    // console.log(list);

  }

  return (
    <div className='tint-shade-container'>
      <Hero
        heading={"Tint and Shade Generator"}
        para1={"Generate color shades online."}
        para2={"Enter Hex code or pick color and get different tint and shades"} />

      <form onSubmit={handleTintShade}>
        <input type="color" className='input-color' value={color} onChange={e => setColor(e.target.value)} />
        <input type="text" value={color} onChange={e => setColor(e.target.value)} className='input-text' />
        <input type="submit" value="Submit" className="input-btn" />
      </form>


      <div className='tint-color-box'>

        {tintList.map((colorObj, index) => {

          const type = colorObj.type;
          const rgb = `rgb(${colorObj.rgb[0]}, ${colorObj.rgb[1]}, ${colorObj.rgb[2]})`
          const weight = colorObj.weight;

          return (
            <TintColor key={index} rgb={rgb} weight={weight} type={type} />
          )
        })}
      </div>

      <div className='shade-color-box'>

        {shadeList.map((colorObj, index) => {

          const type = colorObj.type;
          const rgb = `rgb(${colorObj.rgb[0]}, ${colorObj.rgb[1]}, ${colorObj.rgb[2]})`
          const weight = colorObj.weight;

          return (
            <ShadeColor key={index} rgb={rgb} weight={weight} type={type} />
          )
        })}
      </div>
    </div>
  )
}

export default Tint




const TintColor = ({ rgb, weight, type }) => {
  return (
    <div className='tint-color' style={{ backgroundColor: `${rgb}` }} >

    </div>
  )
}

const ShadeColor = ({ rgb, weight, type }) => {
  return (
    <div className='shade-color' style={{ backgroundColor: `${rgb}` }} >

    </div>
  )
}