import React from "react";
import "./BackgroundVideo.css";

export default function BackgroundVideo(props) {
  const iconMapping = {
    "clear-sky-day": "/bg/clear-day.mp4",
    "clear-sky-night": "/bg/clear-night.mp4",
    "few-clouds-day": "/bg/cloudy-day.mp4",
    "few-clouds-night": "/bg/cloudy-night.mp4",
    "scattered-clouds-day": "/bg/cloudy-day.mp4",
    "scattered-clouds-night": "/bg/cloudy-night.mp4",
    "broken-clouds-day": "/bg/cloudy-day.mp4",
    "broken-clouds-night": "/bg/cloudy-night.mp4",
    "shower-rain-day": "/bg/rainy-day.mp4",
    "shower-rain-night": "/bg/rainy-night.mp4",
    "rain-day": "/bg/rainy-day.mp4",
    "rain-night": "/bg/rainy-night.mp4",
    "thunderstorm-day": "/bg/rainy-day.mp4",
    "thunderstorm-night": "/bg/rainy-night.mp4",
    "snow-day": "/bg/snow-day.mp4",
    "snow-night": "/bg/snow-night.mp4",
    "mist-day": "/bg/fog-day.mp4",
    "mist-night": "/bg/fog-night.mp4",
  };
  return (
    <div className="BackgroundVideo">
      <video autoPlay loop muted>
        <source src={iconMapping[props.description]} type="video/mp4" />
      </video>
    </div>
  );
}
