import Navbar from '../components/Fragments/Navbar'
import About from '../components/Fragments/About'
import Services from '../components/Fragments/Services'
import Portfolio from '../components/Fragments/Portfolio'
import Contact from '../components/Fragments/Contact'
import Footer from '../components/Fragments/Footer'
import './../style.css'

export default function Index() {
    return (
        <>
            <Navbar />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}