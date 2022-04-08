import React, { useEffect, useState } from "react";
import { Station } from "../Station/Station";
import { stationMap } from "../../constants";
import moment from "moment";

import "./display.scss";

import { BAKER_ID, MASONIC_ID, DIVISADERO_ID } from "../../constants";

const Display = () => {
  const generateTime = () => {
    return moment().format("H:mm");
  };

  const generateDate = () => {
    return moment().format("dddd, MMMM D");
  };

  const [time, setTime] = useState(generateTime());
  const [date, setDate] = useState(generateDate());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(generateTime());
      setDate(generateDate());
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div className="display">
      <header className="display-header">
        <div className="photo-display"></div>
        <div className="time-display">
          <span className="time-display__time">{time}</span>
          <span className="time-display__date">{date}</span>
        </div>
      </header>
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
