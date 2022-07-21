import React, { useEffect } from 'react'
import { motion, useTransform, useViewportScroll } from "framer-motion"
import { ReactComponent as Down } from '../images/Next.svg'
import resume from '../images/HrithikSinhaCV.pdf'

const transition = { duration: 1.4, ease: 'easeInOut', delay: 1.5 }

const Hero = ({ onCursor, setToggleMenu }) => {
    const { scrollYProgress } = useViewportScroll()
    const x = useTransform(scrollYProgress, [1, 0], [1000, 0])

    useEffect(() => {

        setTimeout(() => {
            document.body.style.overflow = "visible"
        }, 3000)

    })

    return (
        <>
            <motion.header className="header maxwidth" initial='initial' animate='animate' exit='exit'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: transition }} className="circle"></motion.div>
                <div className="container">
                    <motion.nav id="hero" className="nav"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 2.2, ...transition } }}>

                        <h5>Kaisam</h5>
                        <ul>
                            <li><a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} href="#about">about</a></li>
                            <li><a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} href="#project">projects</a></li>
                            <li><a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} href={resume} download>resume</a></li>
                            <li><a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} href="#contact">contact</a></li>
                        </ul>

                        <a href="#menu" className="nav-toggle" onClick={() => setToggleMenu(true)}>
                            <span></span>
                            <span></span>
                        </a>
                    </motion.nav>
                </div>

                <motion.div className="banner">

                    <div className="banner__upper">
                        <motion.h1
                            className="first" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: transition }}
                        >
                            Hrithik Sinha
                        </motion.h1>
                        <motion.h1
                            className="second" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: transition }}
                        >UX designer</motion.h1>
                    </div>

                    <motion.div className="banner__lower"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 2.2, ...transition } }}>

                        <Down className="scroll" />
                        <div className="kaisam">
                            <motion.div style={{ translateX: x }}
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 2.2, ...transition } }}
                            >
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                                <span>KAISAM</span>
                            </motion.div>
                        </div>

                    </motion.div>
                </motion.div>
            </motion.header>
        </>
    )
}

export default Hero
