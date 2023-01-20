import React from 'react'
import Hero from './Hero'
import PaletteCard from './PaletteCard'
import Loader2 from './Loader2'
const Home = () => {

    const ColorPaletteData = [{
        id: 1,
        title: "Alike Flowers",
        colors: ['#e21b5a', '#9e0c39', '#333333', '#fbffe3', '#83a300'],
        likes: 10,
    }, {
        id: 2,
        title: "Sandy",
        colors: ["#efd9b4", "#d6a692", "#a39081", "#4d6160", "#292522"],
        likes: 40,
    }, {
        id: 3,
        title: "Evening",
        colors: ["#c75233", "#ffc6a5", "#e6324b", "#2b2b2b", "#353634"],
        likes: 60,
    }, {
        id: 4,
        title: "Asthetic Remix",
        colors: ["#c75233", "#c78933", "#d6ceaa", "#79b5ac", "#5e2f46"],
        likes: 25,
    }, {
        id: 5,
        title: "Winter Sweater",
        colors: ["#f8b195", "#f67280", "#c06c84", "#6c5b7b", "#355c7d"],
        likes: 47,
    }, {
        id: 6,
        title: "Flash",
        colors: ["#1c2130", "#028f76", "#b3e099", "#ffeaad", "#d14334"]
    }, {
        id: 7,
        title: "Aqua",
        colors: ["#f2e3c6", "#ffc6a5", "#0d6759", "#7ab317", "#a0c55f"],
        likes: 20,
    }, {
        id: 8,
        title: "Metallic",
        colors: ["#b9d7d9", "#668284", "#2a2829", "#493736", "#7b3b3b"],
        likes: 20,
    }, {
        id: 9,
        title: "Sunset",
        colors: ["#300030", "#480048", "#601848", "#c04848", "#f07241"],
        likes: 20,
    }, {
        id: 10,
        title: "Orange sky",
        colors: ["#69d2e7", "##a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
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
            <Loader2 />
        </div>
    )
}

export default Home