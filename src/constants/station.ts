import keyBy from "lodash/keyBy";

export const MASONIC_ID = "4230";
export const BAKER_ID = "5385";
export const DIVISADERO_ID = "5390";

export const stations = [
  {
    id: "4230",
    intersection: {
      street: "Fulton",
      cross: "Masonic",
    },
    routeTag: 5,
    stopTag: "4230",
    stopId: "14230",
    routeTitle: "5-Fulton",
    agencyTitle: "San Francisco Muni",
    stopTitle: "Fulton St & Masonic Ave",
  },
  {
    id: "5385",
    intersection: {
      street: "McAllister",
      cross: "Baker",
    },
    routeTag: 5,
    stopTag: "5385",
    stopId: "15385",
    routeTitle: "5-Fulton",
    agencyTitle: "San Francisco Muni",
    stopTitle: "McAllister St & Baker St",
  },
  {
    id: "5390",
    intersection: {
      street: "McAllister",
      cross: "Divisadero",
    },
    routeTag: 5,
    stopTag: "5390",
    stopId: "15390",
    routeTitle: "5-Fulton",
    agencyTitle: "San Francisco Muni",
    stopTitle: "McAllister St & Divisadero St",
  },
];

export const stationMap = keyBy(stations, "id");
