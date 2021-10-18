import { MASONIC_ID, BAKER_ID, DIVISADERO_ID } from "../constants";

export type DirectionType = {
  id: string;
  name: string;
  destinationName: string;
};

export type PredictionType = {
  seconds: string;
  tripTag: string;
  minutes: string;
  isDeparture: string;
  block: string;
  dirTag: string;
  epochTime: string;
  vehicle: string;
};

export type StationIdType =
  | typeof MASONIC_ID
  | typeof BAKER_ID
  | typeof DIVISADERO_ID;
