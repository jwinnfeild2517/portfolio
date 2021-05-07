import BEMHelper from "react-bem-helper";
import React from "react"
import { Link } from "react-router-dom";
// import CarouselImage from "../mobile-image-hero-1.jpg"

export default class BookSearch extends React.Component {
    state = {
        descOpen: false
    }

    // allows us to generate class names using nav
    classes = new BEMHelper('carouselCard');

    handleClick = () => {
        this.setState(prevState => ({
            descOpen: !prevState.descOpen
        }))
    }
    render(){
        // const descPosition = this.state.descOpen ? {height: '100%'} : {height: '25%'}
        return(
            <div className="carouselCard book-search" onClick={this.handleClick}>
                {/* <img src={CarouselImage} alt=""/> */}
                <h3>Title Search</h3>
                <p>A Book Search Engine Powered by Google</p>
                <Link to="/search" className="nav-link">Find A Book</Link>
            </div>
        )
    }
}