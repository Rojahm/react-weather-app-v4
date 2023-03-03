import React, { useState } from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");
  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <hr />
        <div className="row">
          {forecastData.map(function (forecastDay, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastInfo data={forecastDay} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <hr />
      </div>
    );
  } else {
    const apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Forecast">
        <p>Loading forecast</p>
      </div>
    );
  }
}
export default Forecast;
