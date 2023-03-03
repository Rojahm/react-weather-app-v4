import React, { useState } from "react";
import Icon from "./Icon";
import axios from "axios";
import ForecastFormatDate from "./ForecastFormatDate";

function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");
  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data);
  }
  if (loaded) {
    return (
      <div className="Forecast">
        <hr />
        <div className="row">
          <div className="col text-center">
            <ForecastFormatDate date={forecastData.daily[0].time} />
            <div>
              <Icon icon="clear-sky-day" size="36" />
            </div>
            <div>
              <span>
                <span>2° -2°</span>
              </span>
            </div>
          </div>
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
