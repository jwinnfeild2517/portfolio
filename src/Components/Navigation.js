import React from 'react';
import BEMHelper from "react-bem-helper";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
    state = {
        menuOpen: false
    }

    // allows us to generate class names using nav
    classes = new BEMHelper('nav');

    handleClick = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }))
    }

    render() {
        // change the menu top position property based on state
        const overlayPosition = this.state.menuOpen ? {top: '0'} : {top: '-100em'}
        return(
            <React.Fragment>
                <div {...this.classes()}>
                    <div {...this.classes('brand-name')}>
                        <p>J E N N E R</p>
                        <p>T H O M A S</p>
                    </div>
                    <button className="menu-trigger fas fa-bars" onClick={this.handleClick}></button>
                </div>
                <div {...this.classes('menu-overlay')} style={overlayPosition}>
                    <button className="menu-trigger fas fa-times" onClick={this.handleClick}>

                    </button>
                    <ul {...this.classes('menu-items')}>
                        <li {...this.classes('menu-link')}>
                            <Link to="/" onClick={this.handleClick}>Home</Link>
                        </li>
                        <li {...this.classes('menu-link')}><Link to="projects" onClick={this.handleClick}>Projects</Link></li>
                        <li {...this.classes('menu-link')}><Link to="about" onClick={this.handleClick}>About</Link></li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
