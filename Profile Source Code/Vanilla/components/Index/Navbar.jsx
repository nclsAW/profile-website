import { useState, useEffect, useRef } from "react"
import listIcon from "../../assets/list.svg"
import closeIcon from "../../assets/x-lg.svg"
import navBrand from '../../assets/Logo Brand.png'
import '../../style.css'

function scrollToAnchor(anchor) {
    var element = document.querySelector('#' + anchor);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export default function Navbar() {
    const [isCollapsed, setCollapsed] = useState(true)
    const navbarCollapseRef = useRef(null)
    const iconNavRef = useRef(null)
    const navBarRef = useRef(null)

    const handleToggler = () => {
        setCollapsed(!isCollapsed)
    };

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

    useEffect(() => {
        const navbarCollapse = navbarCollapseRef.current;
        const iconNav = iconNavRef.current;
        const navBar = navBarRef.current;

        if (isCollapsed) {
            collapseNavbar(navbarCollapse, iconNav, navBar);
        } else {
            expandNavbar(navbarCollapse, iconNav, navBar);
        }
    }, [isCollapsed]);

    const handleNavClick = (e, anchor) => {
        e.preventDefault();
        scrollToAnchor(anchor);
    };

    const collapseNavbar = (el1, el2, el3) => {
        el1.style.height = el1.scrollHeight + 'px';
        el1.offsetHeight;
        el1.classList.add('collapsing');
        el1.classList.remove('collapse', 'show');
        el1.style.height = '0';
        el2.src = listIcon;
        el3.style.background = '';

        el1.addEventListener('transitionend', function () {
            el1.classList.remove('collapsing');
            el1.classList.add('collapse');
            el1.style.height = '';
        }, { once: true });
    };

    const expandNavbar = (el1, el2, el3) => {
        el1.classList.add('collapsing');
        el1.classList.remove('collapse');
        el1.offsetHeight;
        el1.style.height = el1.scrollHeight + 'px';
        el2.src = closeIcon;
        el3.style.background = '#fff';

        el1.addEventListener('transitionend', function () {
            el1.classList.remove('collapsing');
            el1.classList.add('collapse', 'show');
            el1.style.height = '';
        }, { once: true });
    };

    return (
        <>
            <nav className="navbar" ref={navBarRef}>
                <div className="navbar-box nav-container">
                    <a className="navbar-brand" href="/">
                        <img src={navBrand} alt="Brand Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={handleToggler} data-bs-target="#navbarNav">
                        <img className="iconNav" ref={iconNavRef} src={listIcon} alt="Toggle Icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
                        <ul className="menu-nav">
                            <li className="nav-box">
                                <a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                            </li>
                            <li className="nav-box">
                                <a className="nav-link" href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
                            </li>
                            <li className="nav-box">
                                <a className="nav-link" href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
                            </li>
                            <li className="nav-box">
                                <a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
