import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineUndo } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

const PaletteZoom = () => {

    const ColorPaletteData = [{
        id: 1,
        title: "Cool blue",
        colors: ['#e21b5a', '#9e0c39', '#333333', '#fbffe3', '#83a300'],
        likes: 10,
    }, {
        id: 2,
        title: "Cool blue",
        colors: ["#efd9b4", "#d6a692", "#a39081", "#4d6160", "#292522"],
        likes: 40,
    }, {
        id: 3,
        title: "Subsut",
        colors: ["#c75233", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 60,
    }, {
        id: 4,
        title: "Subsut",
        colors: ["#f2e3c6", "#c78933", "#d6ceaa", "#79b5ac", "#79b5ac"],
        likes: 25,
    }, {
        id: 5,
        title: "Subsut",
        colors: ["#f8b195", "#f67280", "#c06c84", "#6c5b7b", "#355c7d"],
        likes: 47,
    }, {
        id: 6,
        title: "Subsut",
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
    }, {
        id: 7,
        title: "Subsut",
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
    }, {
        id: 8,
        title: "Subsut",
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
    }, {
        id: 9,
        title: "Subsut",
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
    }, {
        id: 10,
        title: "Subsut",
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
    }
    ]
    const colorID = useParams().id;
    const data = ColorPaletteData.filter((colorPalette) => {
        if (colorPalette.id === parseInt(colorID)) { return colorPalette };
    })


    const colorData = data[0];
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
                    <p>{color}</p>
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
                setFilterColorsArray(result);
            }} color={'white'} size={50} />
            </li>
            <li><AiOutlineUndo onClick={() => {
                setFilterColorsArray(colorsArray)
            }} color={'white'} size={50} />
            </li>
            <li><MdContentCopy onClick={() => {
                navigator.clipboard.writeText(color)
            }} color={'white'} size={50} />
            </li>
        </ul>
    )
}


export default PaletteZoom