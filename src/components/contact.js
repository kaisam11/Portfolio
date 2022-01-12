import React from 'react'
import { ReactComponent as Up } from '../images/up.svg'

const Contact = ({ onCursor }) => {
    return (
        <>
            <footer className="footer container maxwidth">
                <h2 id="contact">Get in touch</h2>
                <div className="footer__inner">
                    <a className="top" href="#hero"
                        onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}
                    >BACK TO TOP
                        <Up />
                    </a>
                    <div className="social">
                        <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}
                            className="email" href="mailto:hrithiksinha17@gmail.com">hrithiksinha17@gmail.com</a>
                        <div className="social__icons">
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hrithik-sinha-b45107173/">linkedin</a>
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://github.com/kaisam11">github</a>
                            <a onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} target="_blank" rel="noopener noreferrer" href="https://www.behance.net/hrithiksinha">behance</a>
                        </div>
                    </div>
                </div>
                <p>hrithik sinha 2022. all rights reserved</p>
            </footer>
        </>
    )
}

export default Contact
