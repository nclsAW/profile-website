import { useState, useEffect, useRef } from "react";
import closeIcon from "./../../../assets/x-lg.svg";
import navBrand from './../../../assets/Logo Brand.png';
import CollapseBtn from "../Buttons/CollapseBtn";
import NavItem from "./NavItem";
import listIcon from "./../../../assets/list.svg";

export default function NavBox() {
    const [isCollapsed, setCollapsed] = useState(true);
    const navbarCollapseRef = useRef(null);
    const iconNavRef = useRef(null);
    const navBarRef = useRef(null);

    const handleToggler = () => {
        setCollapsed(!isCollapsed);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = navBarRef.current;
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <nav className="navbar" ref={navBarRef}>
            <div className="navbar-box nav-container">
                <a className="navbar-brand" href="/">
                    <img src={navBrand} alt="Brand Logo" />
                </a>
                <CollapseBtn onClick={handleToggler} iconNavRef={iconNavRef} />
                <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
                    <ul className="menu-nav">
                        <NavItem />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
