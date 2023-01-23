import React from 'react'
import { motion } from 'framer-motion'
import { heroVariants } from '../utils/Variants'


const Hero = ({heading, para1, para2}) => {
    return (
        <motion.div variate={heroVariants} initial='hidden' animate='visible' className='hero'>
            <h1>{heading}</h1>
            <p>
                {para1}
            </p>
            <p>
                {para2}
            </p>
        </motion.div>
    )
}

export default Hero