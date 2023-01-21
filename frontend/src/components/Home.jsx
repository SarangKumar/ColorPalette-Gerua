import React from 'react'
import Hero from './Hero'
import PaletteCard from './PaletteCard'
import ColorPaletteData from '../data/ColorData'

const Home = () => {



    return (
        <div className='home'>
            <Hero
                heading={"Popular Color Palettes"}
                para1={"Collection of 1000+ color palettes."}
                para2={"Pick your perfect color palette for your next dream project."} />

            <div className="container">
                {ColorPaletteData.map((colorPalette) => {
                    return <PaletteCard key={colorPalette.id} data={colorPalette} className='palette-box'/>
                })}
            </div>
        </div>
    )
}

export default Home