import React from "react";
import FormatDate from "./FormatDate";
import UnitConversion from "./UnitConversion";
import Icon from "./Icon";

export default function Info(props) {
  return (
    <div className="Info">
      <div className="row">
        <div className="col-8">
          <div className="weather-details">
            <div className="icon">
              <Icon icon={props.data.icon} alt={props.data.description} />
            </div>
            <UnitConversion metric={props.data.temp} />

            <div className="detail-list">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4 city">
          <h3>
            {props.data.city}, {props.data.country}
          </h3>
          <ul>
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
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
