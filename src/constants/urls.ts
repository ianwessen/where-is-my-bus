// https://www.nextbus.com/#!/sf-muni/5/5____I_F00/5385

export const AGENCY_ID = "sf-muni";

export const ROUTE_TAG = "5";

export const BASE_URL = `https://retro.umoiq.com/service/publicJSONFeed`;

export const COMMAND_QUERY_STRING = `command=predictions`;
export const AGENCY_QUERY_STRING = `a=${AGENCY_ID}`;
export const ROUTE_TAG_PARAM = `:routeTag`;
export const ROUTE_TAG_QUERY_STRING = `r=${ROUTE_TAG_PARAM}`;
export const STOP_ID_PARAM = `:stationId`;
export const STOP_ID_QUERY_STRING = `s=${STOP_ID_PARAM}`;

const QUERY_STRING = [
  COMMAND_QUERY_STRING,
  AGENCY_QUERY_STRING,
  ROUTE_TAG_QUERY_STRING,
  STOP_ID_QUERY_STRING,
].join("&");

export const PREDICTION_URL = `${BASE_URL}?${QUERY_STRING}`;
