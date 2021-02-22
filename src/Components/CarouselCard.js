import BEMHelper from "react-bem-helper";
import React from "react"
import CarouselImage from "../mobile-image-hero-1.jpg"

export default class CarouselCard extends React.Component {
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
        const descPosition = this.state.descOpen ? {height: '100%'} : {height: '25%'}
        return(
            <div {...this.classes()} onClick={this.handleClick}>
                <img src={CarouselImage} alt=""/>
                <div {...this.classes('description')} style={descPosition}>
                    <p>Project Discription and stuff <i className="fas fa-arrow-circle-down"></i></p>
                    <p>A modern furniture store specializing in decorative inovations.</p>
                </div>
            </div>
        )
    }
}