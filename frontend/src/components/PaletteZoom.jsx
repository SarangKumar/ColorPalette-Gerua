import React from 'react'
import { useParams } from 'react-router-dom'


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
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
    }, {
        id: 4,
        title: "Subsut",
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
    }, {
        id: 5,
        title: "Subsut",
        colors: ["#f2e3c6", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 20,
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
        if (colorPalette.id == colorID) return colorPalette
    })

    const colorData = data[0];
    
    return (
        <div className='palette-zoom'>
            {/* {colorData.id} {colorData.title} */}
            {colorData.colors.map((color, index) => <div key={index} style={{backgroundColor: color}} className='zoom-palette-color'>{color}</div>)}

        </div>
    )
}

export default PaletteZoom