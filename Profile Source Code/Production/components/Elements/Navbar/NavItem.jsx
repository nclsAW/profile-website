function scrollToAnchor(anchor) {
    var element = document.querySelector('#' + anchor);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export default function NavItem() {
    const handleNavClick = (e, anchor) => {
        e.preventDefault();
        scrollToAnchor(anchor);
    };

    const navBoxItem = [
        {
            name:'about',
            title:'About',
        },
        {
            name:'services',
            title:'Services',
        },
        {
            name:'portfolio',
            title:'Portfolio',
        },
        {
            name:'contact',
            title:'Contact',
        },
    ]

    return (
        <>
            {navBoxItem.map((item, index) => (
                <li className="nav-box" key={index}>
                    <a className="nav-link" href={`#${item.name}`} onClick={(e) => handleNavClick(e, `${item.name}`)}>{item.title}</a>
                </li>
            ))}
        </>
    )
}