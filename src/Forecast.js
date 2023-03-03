import React from "react";
import Icon from "./Icon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h4>from Forecast Componenet</h4>
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
    </div>
  );
}
