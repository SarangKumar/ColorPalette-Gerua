import React from 'react'
import Hero from './Hero'
import PaletteCard from './PaletteCard'

const Home = () => {

    const ColorPaletteData = [{
        id: 1,
        title: "Cool blue",
        colors: ['#e21b5a', '#9e0c39', '#333333', '#fbffe3', '#83a300'],
        likes: 10,
    }, {
        id: 2,
        title: "Cool blue",
        colors: ["#efd9b4", "#d6a692", "#a39081" ,"#4d6160", "#292522"],
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

    return (
        <div className='home'>
            <Hero
                heading={"Popular Color Palettes"}
                para1={"Collection of 1000+ color palettes."}
                para2={"Pick your perfect color palette for your next dream project."} />

            <div className="container">
                {ColorPaletteData.map((colorPalette) => {
                    return <PaletteCard key={colorPalette.id} data={colorPalette} />
                })}
            </div>


        </div>
    )
}

export default Home