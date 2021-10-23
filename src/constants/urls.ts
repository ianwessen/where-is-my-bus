export const AGENCY_ID = "sf-muni";

export const ROUTE_TAG_5 = "5";
export const ROUTE_TAG_5R = "5R";

export const BASE_URL = `https://retro.umoiq.com/service/publicJSONFeed`;

export const COMMAND_QUERY_STRING = `command=predictions`;
export const AGENCY_QUERY_STRING = `a=${AGENCY_ID}`;
export const ROUTE_TAG_PARAM = `:routeTag`;
export const ROUTE_TAG_QUERY_STRING = `r=${ROUTE_TAG_PARAM}`;
export const STOP_ID_PARAM = `:stopId`;
export const STOP_ID_QUERY_STRING = `stopId=${STOP_ID_PARAM}`;

const QUERY_STRING = [
  COMMAND_QUERY_STRING,
  AGENCY_QUERY_STRING,
  STOP_ID_QUERY_STRING,
].join("&");

export const PREDICTION_URL = `${BASE_URL}?${QUERY_STRING}`;
export const MOCK_PREDICTION_URL = `mock-prediction?${QUERY_STRING}`;
