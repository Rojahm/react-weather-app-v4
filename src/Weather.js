import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

function Weather() {
  let form = (
    <form className="input-group mb-3">
      <input type={"search"} autoFocus="on" className="form-control" />
      <input type={"submit"} className="btn btn-dark" value="Search" />
    </form>
  );

  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {form}
        <div className="row">
          <div className="col">
            <div className="weather-details">
              <div className="icon">
                <img src={weatherData.icon_url} alt="weather icon" />
              </div>
              <div className="temp">
                <h2 className="px-2">{weatherData.temp}</h2>
              </div>
              <div className="unit">
                <span>°C</span>
                <span>|</span>
                <span>°F</span>
              </div>
              <div className="detail-list">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col city">
            <h3>
              {weatherData.city}, {weatherData.country}
            </h3>
            <ul>
              <li>
                <FormatDate date={weatherData.date} />
              </li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
        </div>
        <div className="weather-menu">
          <div className="weather-menu-item">Temperature</div>
          <span className="weather-menu-border"> </span>
          <div className="weather-menu-item">Humidity</div>

          <span className="weather-menu-border"> </span>
          <div className="weather-menu-item">Wind</div>
        </div>
      </div>
    );
  } else {
    const key = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
    let unit = "metric";
    let city = "berlin";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Weather">
        <h3>Loading...</h3>
      </div>
    );
  }
}
export default Weather;
