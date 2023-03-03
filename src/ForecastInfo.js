import React from "react";
import ForecastFormatDate from "./ForecastFormatDate";
import Icon from "./Icon";

function ForecastInfo(props) {
  function maxTemp() {
    return Math.round(props.data.temperature.maximum);
  }
  function minTemp() {
    return Math.round(props.data.temperature.minimum);
  }
  return (
    <div className="ForecastInfo">
      <div className="col text-center">
        <ForecastFormatDate date={props.data} />
        <Icon icon={props.data.condition.icon} size="36" />
        <span>
          <span>
            {maxTemp()}° {minTemp()}°
          </span>
        </span>
      </div>
    </div>
  );
}
export default ForecastInfo;
