import React from "react";
import { PredictionTable } from "../PredictionTable/PredictionTable";
import { stationMap } from "../../constants";
import { StationIdType } from "../../types";

type StationPropsType = {
  id: StationIdType;
};

const getTitleFromKey = (stationId: StationIdType) => {
  if (!stationId) return "No title";
  const { street, cross } = stationMap[stationId].intersection;
  return `${street} & ${cross}`;
};

const Station = ({ id: stationId }: StationPropsType) => {
  const title = getTitleFromKey(stationId);

  return (
    <>
      <h2>
        Inbound <br />
        {title}
      </h2>
      <PredictionTable id={stationId} />
    </>
  );
};

export { Station };
