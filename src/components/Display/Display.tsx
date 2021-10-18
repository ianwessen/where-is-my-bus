import React from "react";
import { Station } from "../Station/Station";
import { stationMap } from "../../constants";
import moment from "moment";

import "./display.scss";

import { BAKER_ID, MASONIC_ID, DIVISADERO_ID } from "../../constants";

const Display = () => {
  const time = moment().format("HH:MM");
  const date = moment().format("dddd, MMMM D");
  return (
    <div className="display">
      <div className="time-display">
        <span className="time-display__time">{time}</span>
        <span className="time-display__date">{date}</span>
      </div>
      <p></p>
      <div className="station-row">
        <div className="station-item">
          <Station id={MASONIC_ID}></Station>
        </div>
        <div className="station-item">
          <Station id={BAKER_ID}></Station>
        </div>
        <div className="station-item">
          <Station id={DIVISADERO_ID}></Station>
        </div>
      </div>
    </div>
  );
};

export { Display };
