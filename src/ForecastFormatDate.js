import React from "react";

export default function ForecastFormatDate(props) {
  let date = new Date(props.date.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return <div className="ForecastFormatDate">{day}</div>;
}
