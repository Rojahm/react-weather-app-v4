import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";
import Info from "./Info";

function Weather(props) {
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
        <Info data={weatherData} />
      </div>
    );
  } else {
    const key = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
    let unit = "metric";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Weather">
        <CircleLoader color="#36d7b7" />
        <h3>Loading...</h3>
      </div>
    );
  }
}
export default Weather;
