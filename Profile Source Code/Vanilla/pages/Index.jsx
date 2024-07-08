import Navbar from '../components/Index/Navbar'
import About from '../components/Index/About'
import Service from '../components/Index/Service'
import Portfolio from '../components/Index/Portfolio'
import Contact from '../components/Index/Contact'
import Footer from '../components/Index/Footer'

export default function Index() {
    return (
        <>
            <Navbar />
            <About />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}