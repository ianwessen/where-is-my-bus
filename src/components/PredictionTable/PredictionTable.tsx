import React from "react";
import "./prediction-table.scss";
import { useQuery } from "react-query";
import { PredictionType, StationIdType } from "../../types";

import {
  ROUTE_TAG_PARAM,
  ROUTE_TAG,
  PREDICTION_URL,
  STOP_ID_PARAM,
} from "../../constants";

type PredictionTablePropsType = {
  id: StationIdType;
};

const PredictionTable = ({ id: stationId }: PredictionTablePropsType) => {
  const { isLoading, error, data } = useQuery(
    `prediction-${stationId}`,
    async () => {
      const url = PREDICTION_URL.replace(ROUTE_TAG_PARAM, ROUTE_TAG).replace(
        STOP_ID_PARAM,
        stationId
      );

      // const response = await fetch(`/mock/${stationId}`);
      const response = await fetch(url);
      const result = await response.json();
      return result;
    },
    {
      refetchInterval: 10000,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data.predictions?.dirTitleBecauseNoPredictions) {
    return <p>🌙 No more busses tonight</p>;
  }

  console.log("data", data);
  const { prediction } = data.predictions.direction;

  return (
    <table className="prediction-table">
      <thead>
        <tr>
          <td>Route</td>
          <td>Prediction</td>
          <td>Vehicle</td>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(prediction) &&
          prediction.map((p: PredictionType) => {
            const { vehicle, minutes } = p;
            return (
              <tr key={`${vehicle}-${minutes}`}>
                <td>5</td>
                <td>{minutes} min</td>
                <td>{vehicle}</td>
              </tr>
            );
          })}
        {prediction?.minutes && (
          <tr>
            <td>5</td>
            <td>{prediction.minutes} min</td>
            <td>{prediction.vehicle}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export { PredictionTable };
