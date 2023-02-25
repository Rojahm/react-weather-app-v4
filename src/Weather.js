import React from "react";
import "./Weather.css";

function Weather() {
  let form = (
    <form className="input-group mb-3">
      <input type={"search"} autoFocus="on" className="form-control" />
      <input type={"submit"} className="btn btn-dark" value="Search" />
    </form>
  );
  return (
    <div className="Weather">
      {form}
      <div className="row">
        <div className="col">
          <div className="weather-details">
            <div className="icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="weather icon"
              />
            </div>
            <div className="unit">
              <h2 className="px-2">2</h2>
              <span>°C|°F</span>
            </div>
            <div className="detail-list">
              <ul>
                <li>Precipitation: 17%</li>
                <li>Humidity: 92%</li>
                <li>Wind: 21 km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col city">
          <h3>Berlin, Germany</h3>
          <ul>
            <li>Friday 16:00</li>
            <li>Cloudy</li>
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
}
export default Weather;
