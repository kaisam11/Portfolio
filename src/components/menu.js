import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import resume from '../images/HrithikSinhaCV.pdf'

const transition = { duration: 2, ease: [.6, .01, -.05, .9] }

const parent = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: .6,
            staggerChildren: .04,
            staggerDirection: -1
        }
    }
}

const child = {
    initial: {
        y: 72,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { ...transition, duration: 2 }
    }
}


const Menu = ({ setToggleMenu, toggleMenu }) => {

    const [width, setWidth] = React.useState()

    React.useEffect(() => {

        function handleWidth() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidth)

        handleWidth()

        return () => {
            window.removeEventListener('resize', handleWidth)
        }

    })

    const slidein = {
        initial: {
            width: 0,
            opacity: 0
        },
        animate: {
            width: width,
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 1
            }
        }
    }


    return (
        <AnimatePresence>
            {toggleMenu &&
                <motion.nav className="nav-menu" variants={slidein} initial='initial' exit={{ width: 0, opacity: 0, transition: transition }} animate='animate'>
                    <motion.a href="#menu" className="nav-close" onClick={() => setToggleMenu(false)}
                        initial={{ opacity: 0 }} animate={{ opacity: 1, transition: transition }}
                    >
                        <span></span>
                        <span></span>
                    </motion.a>
                    <motion.ul variants={parent} initial='initial' animate='animate'>
                        <motion.li variants={child}><a onClick={() => setToggleMenu(false)} href="#about">about</a></motion.li>
                        <motion.li variants={child}><a onClick={() => setToggleMenu(false)} href="#project">projects</a></motion.li>
                        <motion.li variants={child}><a onClick={() => setToggleMenu(false)} href={resume} download>resume</a></motion.li>
                        <motion.li variants={child}><a onClick={() => setToggleMenu(false)} href="#contact">contact</a></motion.li>
                    </motion.ul>
                </motion.nav>
            }
        </AnimatePresence>
    )
}

export default Menu
