import React, { useEffect, useRef, useState } from 'react'
import hoverEffect from 'hover-effect'
import { motion, useTransform, useViewportScroll } from "framer-motion"
import { projects } from '../data/data'

const Project = ({ onCursor }) => {

    const { scrollYProgress } = useViewportScroll()
    const x = useTransform(scrollYProgress, [0.6, 0.3], [1000, 0])
    const x2 = useTransform(scrollYProgress, [0.6, 0.3], [500, 0])

    let wrappers = useRef({})

    projects.map((project) => wrappers.current[project.id - 1] = React.createRef())

    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
      setSize(window.innerWidth)
    }
  
    useEffect(() => {
      window.addEventListener('resize',checkSize)
  
      return () => {
        window.removeEventListener('resize',checkSize)
      }
    })
  
    useEffect(() => {

        projects.map((project) =>

            new hoverEffect({
                parent: wrappers.current[project.id - 1].current,
                intensity: .3,
                imagesRatio: 1080 / 1920,
                image1: project.img,
                image2: project.img2,
                displacementImage: project.distort
            })
        )
    }, [])


    return (
        <>
            <section className="project maxwidth">
                <motion.h1 style={{ x: size > 600 ? x : x2}} id="project">
                    <span>projects</span>
                    <span>projects</span>
                    <span>projects</span>
                    <span>projects</span>
                    <span>projects</span>
                </motion.h1>

                <div className="list container">
                    {projects.map((project) => (
                        <div key={project.id} className={`list__${project.id}`}>
                            <div className="title">
                                <div className="title__main">
                                    <h3>0{project.id}</h3>
                                    <h3>{project.title}</h3>
                                </div>
                                <p>{project.type}</p>
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div onMouseLeave={onCursor} onMouseEnter={() => onCursor("projectHovered")} className='wrapper' ref={wrappers.current[project.id - 1]}></div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Project
