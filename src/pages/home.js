import Hero from '../components/hero'
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'

const Home = ({ onCursor, setToggleMenu }) => {
    return (
        <>
            <Hero onCursor={onCursor} setToggleMenu={setToggleMenu}/>
            <About onCursor={onCursor} />
            <Project onCursor={onCursor} />
            <Contact onCursor={onCursor} />
        </>
    )
}

export default Home

