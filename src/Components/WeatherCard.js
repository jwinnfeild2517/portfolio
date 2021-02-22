import React from "react";
// BEMHelper from "react-bem-helper";

const image1 = 'https://images.pexels.com/photos/4553657/pexels-photo-4553657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// const image2 = 'https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

export default class Weather extends React.Component {

    state = {
        error: null,
        isLoaded: false,
        location: { latitude: null, longitude: null },
        data: { city: null, summary: null, temp: null }
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

    async componentDidMount() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
                const response = await fetch(url)
                const result = await response.json()
                this.setState({
                    isLoaded: true,
                    data: {
                        city: result.name,
                        summary: result.weather[0].main,
                        temp: Math.ceil(result.main.temp)
                    }
                })
            });
        }

        
    }
    render() {
        var weatherData = null
        if (!this.state.isLoaded) {
            weatherData = <h3>Loading Weather data</h3>
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
                <img src={image1} alt="" />
                <div className="carouselCard__description" style={this.styleOverides.descContainer}>
                    {weatherData}
                </div>
            </div>
        )
    }
}