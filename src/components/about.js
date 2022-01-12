import React from 'react'
import {
    useViewportScroll,
    motion,
    useTransform,
    useAnimation,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import kaisam from '../images/Kaisam.webp'
import { ReactComponent as Arrow1 } from '../images/Arrow 1.svg'
import resume from '../images/HrithikSinhaCV.pdf'


const transition = { duration: 1.5, ease: [.6, -.05, .01, .9] }

const About = ({ onCursor }) => {
    const { scrollY } = useViewportScroll();

    const y1 = useTransform(scrollY, [0, 4000], [0, -650])

    const animation = useAnimation()

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const [ref2, inView2] = useInView({
        triggerOnce: true
    })

    React.useEffect(() => {
        
        inView && animation.start('visible')
        inView2 && animation.start('visible2')

    }, [animation, inView, inView2])


    return (
        <>
            <section className="about maxwidth">
                <div id="about" className="about__main">
                    <motion.img className="me" src={kaisam} alt="kaisam" style={{ y: y1 }} />
                    <div className="text">
                        <h1>about me</h1>
                        <motion.div className="text__inner"
                            ref={ref}
                            animate={animation}
                            initial='hidden'
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: transition
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72
                                }
                            }}
                        >
                            <p>My name is Hrithik Sinha (AKA Kaisam). I am a novice front end developer and designer based in India.
                            Aesthetic looking websites with good user experience is what I
                            yearn to design and develop.  I have always been passionate
                            about visual designs and would love to design a website that is awwwards.com worthy.
                            </p>

                            <p className="interest">
                                My interests? I have been an Anime fan ever since I was a kid. 
                                I love to binge-watch Netflix series at times. 
                                I am also a football fan, Hala Madrid!
                            </p>

                            <button className="btn" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}>
                                <div className="arrow">
                                    <Arrow1 className="a1" />
                                </div>
                                <a href={resume} download>Resume</a>
                            </button>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    ref={ref2}
                    animate={animation}
                    initial='hidden'
                    variants={{
                        visible2: {
                            opacity: 1,
                            y: 0,
                            transition: transition
                        },
                        hidden: {
                            opacity: 0,
                            y: 72
                        }
                    }}
                    className="tech-stack container">
                    <h3>tech - stack</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React js</li>
                        <li>Figma</li>
                    </ul>
                </motion.div>
            </section>
        </>
    )
}

export default About
