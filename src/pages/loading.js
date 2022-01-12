import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const transition = { ease: [.6, .01, -.05, .9] }

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            staggerChildren: .04,
            staggerDirection: -1
        }
    }
}

const lastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            staggerChildren: .04,
            staggerDirection: 1
        }
    }
}

const letter = {
    initial: {
        y: 400,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {...transition, duration: 1.5}
    }
}

const line = {
    initial: {
        width: 0,
    },
    animate: {
        width: window.innerWidth,
        transition: {...transition, duration: 2.1, delay: 2.1}
    }
}

const Loading = ({ loading }) => {

    return (
        <AnimatePresence>
            {loading && <>
                <motion.div className="loading"
                    exit={{ opacity: 0 }}
                >
                    <motion.span variants={firstName} initial='initial' animate='animate' className='first'>
                        <motion.span variants={letter}>K</motion.span>
                        <motion.span variants={letter}>a</motion.span>
                        <motion.span variants={letter}>i</motion.span>
                        <motion.span variants={letter}>s</motion.span>
                        <motion.span variants={letter}>a</motion.span>
                        <motion.span variants={letter}>m</motion.span>
                    </motion.span>
                    <motion.span className="line" variants={line} initial='initial' animate='animate'></motion.span>
                    <motion.span variants={lastName} initial='initial' animate='animate' className='last'>
                        <motion.span variants={letter}>P</motion.span>
                        <motion.span variants={letter}>a</motion.span>
                        <motion.span variants={letter}>r</motion.span>
                        <motion.span variants={letter}>a</motion.span>
                        <motion.span variants={letter}>d</motion.span>
                        <motion.span variants={letter}>i</motion.span>
                        <motion.span variants={letter}>s</motion.span>
                        <motion.span variants={letter}>e</motion.span>
                    </motion.span>
                </motion.div>
                <Panels />
            </>
            }
        </AnimatePresence>
    )
}

const Panels = () => {

    return (
        <>
            <motion.div
                initial={{ height: 0 }}
                exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
                transition={{ ...transition, duration: 2, times: [0, .5, 1] }}
                className="left-panel-background"></motion.div>

            <motion.div
                initial={{ height: 0 }}
                exit={{ height: [0, window.innerHeight, 0], bottom: [0, 0, window.innerHeight] }}
                transition={{ ...transition, duration: 2, times: [0, .5, 1] }}
                className="right-panel-background"
            ></motion.div>
        </>
    )
}


export default Loading
