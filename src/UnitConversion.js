import React, { useState } from "react";
import "./UnitConversion.css";

function UnitConversion(props) {
  let celsius = Math.round(props.metric);

  return (
    <div className="UnitConversion">
      <div className="temp">
        <h2 className="px-2">{celsius}</h2>
      </div>

      <div className="unit">
        <span>°C</span>
        <span>|</span>
        <span>°F</span>
      </div>
    </div>
  );
}
export default UnitConversion;
