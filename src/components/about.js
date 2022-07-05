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
                            <p>My name is Hrithik Sinha (AKA Kaisam). I am a UX Designer based in India.
                                Aesthetic looking websites and apps with good user experience is what I
                                yearn to design and develop. I have always been passionate about visual designs
                                which is why I love designing. I started off as a Frontend Developer but changed
                                to UX Designer when I found out I spent most of my time trying to make the website
                                look better and eye pleasing during the development phase.
                            </p>

                            <p className="interest">
                                Apart from designing websites
                                and apps, I spend my time watching TV Series on OTT Platforms.
                                I also love watching football especially my favorite club
                                i.e Real Madrid. Sometimes I play games on my pc or mobile as well.
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
                        <li>Figma</li>
                        <li>Photoshop</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                    </ul>
                </motion.div>
            </section>
        </>
    )
}

export default About
