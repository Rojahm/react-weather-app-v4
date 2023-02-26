import React, { useState } from "react";
import "./UnitConversion.css";

function UnitConversion(props) {
  const [temp, setTemp] = useState(props.metric);
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setTemp(Math.round((props.metric * 9) / 5 + 32));
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemp(props.metric);
    setUnit("metric");
  }
  let temperature = (
    <div className="temp">
      <h2 className="px-2">{temp}</h2>
    </div>
  );
  if (unit === "metric") {
    return (
      <div className="UnitConversion">
        {temperature}
        <div className="unit">
          <span>°C</span>
          <span>|</span>
          <span>
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        {temperature}
        <div className="unit">
          <span>
            <a href="/" onClick={showCelsius}>
              °C
            </a>
          </span>
          <span>|</span>
          <span>°F</span>
        </div>
      </div>
    );
  }
}
export default UnitConversion;
