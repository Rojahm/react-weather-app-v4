import React, { useState } from "react";
import "./UnitConversion.css";

function UnitConversion(props) {
  let celsius = Math.round(props.metric);
  let fahrenheit = Math.round((props.metric * 9) / 5 + 32);
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="UnitConversion">
        <div className="temp">
          <h2 className="px-2">{celsius}</h2>
        </div>

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
        <div className="temp">
          <h2 className="px-2">{fahrenheit}</h2>
        </div>

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
