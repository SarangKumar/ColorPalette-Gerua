import React from 'react'

const Hero = ({heading, para1, para2}) => {
    return (
        <div className='hero'>
            <h1>{heading}</h1>
            <p>
                {para1}
            </p>
            <p>
                {para2}
            </p>
        </div>
    )
}

export default Hero