import React, {useState}from 'react';
import BEMHelper from "react-bem-helper";
import { Link } from "react-router-dom";

const Navigation = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('nav');
    // set navigation hook
    const [isOpen, setIsOpen] = useState(false)
    // change navigation state
    const handleClick = () => setIsOpen(!isOpen)
    // change the menu top position property based on state
    const overlayPosition = isOpen ? {top: '0'} : {top: '-100em'}
    return(
        // allows to generate elements without wrapping them in a container first
        <React.Fragment>
            <div {...classes()}>
                <div {...classes('brand-name')}>
                    <p>J E N N E R</p>
                    <p>T H O M A S</p>
                </div>
                <button className="menu-trigger fas fa-bars" onClick={handleClick}></button>
            </div>
            <div {...classes('menu-overlay')} style={overlayPosition}>
                <button className="menu-trigger fas fa-times" onClick={handleClick}>

                </button>
                <ul {...classes('menu-items')}>
                    <li {...classes('menu-link')}>
                        <Link to="/" onClick={handleClick}>Home</Link>
                    </li>
                    <li {...classes('menu-link')}><Link to="projects" onClick={handleClick}>Projects</Link></li>
                    <li {...classes('menu-link')}><Link to="about" onClick={handleClick}>About</Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Navigation
