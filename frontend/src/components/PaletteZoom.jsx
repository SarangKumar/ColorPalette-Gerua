import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineUndo } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import ColorPaletteData from '../data/ColorData'

const PaletteZoom = () => {

    const colorID = useParams().id;
    const colorData = ColorPaletteData.find(colorPalette => (colorPalette.id === parseInt(colorID)))

    console.log(colorData);
    const [colorsArray, setColorsArray] = useState(colorData.colors);
    const [filterColorsArray, setFilterColorsArray] = useState(colorData.colors);

    return (
        <div className="palette-container">
            <p>
                {colorData.title}
            </p>
            <div className="likes">
                <AiOutlineHeart size={20} />
                <p>{colorData.likes}</p>
            </div>

            <div className='palette-zoom'>
                {filterColorsArray.map((color, index) => <div key={index} style={{ backgroundColor: color }} className='zoom-palette-color'>
                    <p>{color.substring(1,7).toUpperCase()}</p>
                    <div className="options">
                        <Toolbar color={color} setFilterColorsArray={setFilterColorsArray} filterColorsArray={filterColorsArray} colorsArray={colorsArray} setColorsArray={setColorsArray} />
                    </div>
                </div>)}
            </div>
        </div>
    )
}

const Toolbar = ({ color, filterColorsArray, setFilterColorsArray, colorsArray, setColorsArray }) => {
    return (
        <ul className="toolbar">
            <li><RxCross2 onClick={() => {
                let result = filterColorsArray.filter((data, index) => color !== data);
                if (result.length !== 0) {
                    setFilterColorsArray(result);
                    console.log(result.length)
                }
            }} color={'white'} size={20} />
            </li>
            <li><AiOutlineUndo onClick={() => {
                setFilterColorsArray(colorsArray)
            }} color={'white'} size={20} />
            </li>
            <li><MdContentCopy onClick={() => {
                navigator.clipboard.writeText(color)
            }} color={'white'} size={20} />
            </li>
        </ul>
    )
}


export default PaletteZoom