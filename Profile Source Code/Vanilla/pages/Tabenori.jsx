import { useEffect, useRef } from "react"
import { Link } from "react-router-dom";

export default function Tabenori() {
    const navBarRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const navbar = navBarRef.current
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled')
            } else {
                navbar.classList.remove('scrolled')
            }
        };

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <nav className="navbar container" ref={navBarRef}>
                <Link to="/"><img src="Transparent Friendly.png" alt="" /></Link>
                <ul className="link d-flex gap-3">
                    <li><a className="pos2" href="#promo">Promo</a></li>
                    <li><Link className="pos2" to="/menu">Menu</Link></li>
                    <li><a className="cart" href="#cart">Cart<span className="cart-counter"><div className="badge-counter text-light">1</div></span></a></li>
                </ul>
            </nav>
            <div className="hero" id="home">
                <img src="hero-2.png" alt="" />
            </div>
        </>
    )
}