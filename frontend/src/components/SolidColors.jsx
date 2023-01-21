import React from 'react'
import Hero from './Hero'
import Loader2 from './Loader2'


const SolidColors = () => {

    return (
        <div>
            <Hero
                heading={"Beautiful Solid Colors"}
                para1={"Collection of 10000+ solid colors for your"}
                para2={"next projects."} />

                <Loader2 />
        </div>
    )
}

export default SolidColors