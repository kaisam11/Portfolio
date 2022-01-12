import React from 'react'
import gsap from 'gsap'
import { ReactComponent as Arrow } from '../images/Arrow 2.svg'
import { useGlobalStateContext } from '../globalContext/globalContext'

const Cursor = () => {
    const { cursorType } = useGlobalStateContext()

    const cursor = React.useRef()
    const cursor2 = React.useRef()

    React.useEffect(() => {

        const onMouseMove = event => {

            const { clientX, clientY } = event
    
            gsap.to(cursor.current, {
                x: `${clientX}px`,
                y: `${clientY}px`,
                duration: .5,
                ease: 'Power3.easeOut',
                overwrite:true,
            })
    
            gsap.to(cursor2.current, {
                x: `${clientX}px`,
                y: `${clientY}px`,
                duration: .8,
                ease: 'Power3.easeOut',
                overwrite:true,
            })
    
        }

        document.addEventListener('mousemove', onMouseMove)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <div className={`cursor ${!!cursorType ? 'hovered' : ''} ${cursorType}`} ref={cursor}>
                <Arrow />
            </div>
            <div className={`cursor2 ${!!cursorType ? 'hovered2' : ''} ${cursorType}`} ref={cursor2}></div>
        </>
    )
}

export default Cursor
