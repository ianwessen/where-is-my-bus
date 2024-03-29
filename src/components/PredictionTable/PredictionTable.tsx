import React from "react";
import "./prediction-table.scss";
import { useQuery } from "react-query";
import { StationIdType, PredictionRowType } from "app/types";
import { parseResponse } from "app/utils/response-helpers";

import { apiClient } from "app/api/client";

type PredictionTablePropsType = {
  id: StationIdType;
};

const PredictionTable = ({ id: stationId }: PredictionTablePropsType) => {
  const { isLoading, error, data } = useQuery(
    `prediction-${stationId}`,
    () => apiClient.getPredictions(`1${stationId}`),
    {
      refetchInterval: 5000,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error(error);
    return <p>There was an error</p>;
  }

  if (!data || !data?.predictions) {
    return <p>Something wrong in response</p>;
  }

  const predictionList = parseResponse(data);

  const isEarlier = (a: PredictionRowType, b: PredictionRowType) => {
    if (!a?.minutes || !b?.minutes) {
      console.log("Malformed sort options", a, b);
      return 0;
    }
    return Number(a.minutes) - Number(b.minutes);
  };

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
        {predictionList.length > 0 &&
          predictionList.sort(isEarlier).map((p: PredictionRowType) => {
            const { routeTag, vehicle, minutes } = p;
            return (
              <tr key={`${vehicle}-${minutes}`}>
                <td>{routeTag}</td>
                <td>{minutes} min</td>
                <td>{vehicle}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export { PredictionTable };
