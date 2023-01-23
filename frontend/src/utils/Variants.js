export const svgVariants = {
    hidden: {
        opacity: 0,
        x: 5,
        strokeWidth: 3
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    }
}

export const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

export const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.1,
            type: 'spring',
            ease: 'easeIn'
        }
    }
}

export const heroVariants = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: 10,
        transition: {
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: "linear" }
        }
    }
}

export const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}