import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'

// BEMHelper from "react-bem-helper";

// const image1 = 'https://images.pexels.com/photos/4553657/pexels-photo-4553657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// const image2 = 'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class Weather extends React.Component {

    state = {
        isLoaded: false,
        location: { latitude: null, longitude: null },
        data: { city: null, summary: null, temp: null },
        error: 'Loading Weather Data',
        value: ''
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getWeatherData(this.state.value);
        this.setState({value: ''});
    }

    getWeatherData = async (cityName) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`
        const response = await fetch(url)
        const result = await response.json()
        if (result.cod === "404") {
            this.setState({
                isLoaded: false,
                error: 'City Not Found'
            })
        } else {
            this.setState({
                isLoaded: true,
                data: {
                    city: result.name,
                    summary: result.weather[0].description,
                    temp: Math.ceil(result.main.temp)
                }
            })
        }
    }

    styleOverides = {
        descContainer: {
            backgroundColor: '#2c2d3469', 
            letterSpacing: '.5px'
        },
        summary: {
            margin: 0
        },
    }
    
    render() {
        var weatherData = null
        if (!this.state.isLoaded) {
            weatherData = <h3>{this.state.error}</h3>
        } else {
            weatherData = 
                <React.Fragment>
                    <h2>{this.state.data.city}</h2>
                    <h3 style={this.styleOverides.summary}>{this.state.data.summary}</h3>
                    <h1>{this.state.data.temp}{'\xB0'}</h1>
                </React.Fragment>
        }
        return (
            <div className="carouselCard">
                {/* <img src={image1} alt="" /> */}
                <div className="carouselCard__description" style={this.styleOverides.descContainer}>
                    <FontAwesomeIcon  style={{background:"linear-gradient(#9c47fc, #356ad2)"}} icon={faCloudRain} 
                        path="fill=black"
                    />
                    {weatherData}
                </div>
                {/* <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter City" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form> */}
            </div>
        )
    }
}