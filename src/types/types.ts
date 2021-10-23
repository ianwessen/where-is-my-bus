import { MASONIC_ID, BAKER_ID, DIVISADERO_ID } from "../constants";

export type StationIdType =
  | typeof MASONIC_ID
  | typeof BAKER_ID
  | typeof DIVISADERO_ID;

export type MessageType = {
  text: string;
  priority: "Low" | "Medium" | "High";
};

export type VehiclePredictionType = {
  seconds: string;
  tripTag: string;
  minutes: string;
  isDeparture: string;
  block: string;
  dirTag: string;
  epochTime: string;
  vehicle: string;
};

export type DirectionType = {
  title: string;
  prediction: VehiclePredictionType | VehiclePredictionType[];
};

export type PredictionType = {
  routeTag: string;
  stopTag: string;
  routeTitle: string;
  agencyTitle: string;
  message: MessageType | MessageType[];
  stopTitle: string;
  direction: DirectionType;
  dirTitleBecauseNoPredictions?: string;
};

export type GetPredictionsResponseType = {
  copyright: string;
  predictions: PredictionType | PredictionType[];
};

export type PredictionRowType = {
  routeTag: string;
  minutes: string;
  vehicle: string;
};
