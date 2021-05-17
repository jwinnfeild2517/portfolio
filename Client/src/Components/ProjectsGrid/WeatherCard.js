import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class Weather extends React.Component {

    state = {
        isLoaded: false,
        location: { latitude: null, longitude: null },
        data: { city: null, summary: null, temp: null },
        error: 'Loading Weather Data',
        value: 'Atlanta'
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getWeatherData(this.state.value);
        this.setState({value: ''});
    }

    componentDidMount = () => {
        this.getWeatherData(this.state.value);
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

    render() {
        var weatherData = null
        if (!this.state.isLoaded) {
            weatherData = <h3>{this.state.error}</h3>
        } else {
            weatherData =
                <React.Fragment>
                    <h2 className="info">
                        <span class="material-icons-outlined"></span>
                        {this.state.data.city}
                    </h2>
                    <h3 className="info info_summary">{this.state.data.summary}</h3>
                    <h1 className="info">{this.state.data.temp}{'\xB0'}</h1>
                </React.Fragment>
        }
        return (
            <div className="projects__items projects__grid-item weather_card">
                <div className="inner_card">
                    {/* <div className="weather_image"><img src="https://images.pexels.com/photos/2093252/pexels-photo-2093252.jpeg?cs=srgb&dl=pexels-fillipe-gomes-2093252.jpg&fm=jpg"></img></div> */}
                    <div className="weather_info">
                        {weatherData}
                    </div>
                </div>
            </div>
        )
    }
}