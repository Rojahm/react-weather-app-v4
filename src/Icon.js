import React from "react";

export default function Icon(props) {
  const iconMapping = {
    "clear-sky-day": "/icon/clear-day.svg",
    "clear-sky-night": "/icon/clear-night.svg",
    "few-clouds-day": "/icon/partly-cloudy-day.svg",
    "few-clouds-night": "/icon/partly-cloudy-night.svg",
    "scattered-clouds-day": "/icon/cloudy.svg",
    "scattered-clouds-night": "/icon/cloudy.svg",
    "broken-clouds-day": "/icon/overcast-day.svg",
    "broken-clouds-night": "/icon/overcast-night.svg",
    "shower-rain-day": "/icon/rain.svg",
    "shower-rain-night": "/icon/rain.svg",
    "rain-day": "/icon/partly-cloudy-day-rain.svg",
    "rain-night": "/icon/partly-cloudy-night-rain.svg",
    "thunderstorm-day": "/icon/wind.svg",
    "thunderstorm-night": "/icon/wind.svg",
    "snow-day": "/icon/snow.svg",
    "snow-night": "/icon/partly-cloudy-night-snow.svg",
    "mist-day": "/icon/fog-day.svg",
    "mist-night": "/icon/fog-night.svg",
  };
  return (
    <div className="Icon">
      <img src={iconMapping[props.icon]} alt={props.alt} />
    </div>
  );
}
