import React from "react";
import Icon from "./Icon";
import axios from "axios";

function Forecast(props) {
  const apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
  function handleResponse(response) {
    console.log(response.data);
  }
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <hr />
      <div className="row">
        <div className="col text-center">
          <div>Sat</div>
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
}
export default Forecast;
