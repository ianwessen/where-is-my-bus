import { StationIdType, PredictionType } from "./../types/index";
import { stationMap } from "../constants";

export const fridayMorningFultonAndMasonicStop = {
  copyright: "All data copyright San Francisco Muni 2021.",
  predictions: [
    {
      routeTag: "5",
      stopTag: "4230",
      routeTitle: "5-Fulton",
      agencyTitle: "San Francisco Muni",
      message: [
        {
          text: "Masks are required. Visit sfmta.com/COVID19 for more info.",
          priority: "Low",
        },
        {
          text: "Text COVID19SF to 888-777 for official updates. Visit sfdph.org",
          priority: "Low",
        },
      ],
      stopTitle: "Fulton St & Masonic Ave",
      direction: {
        prediction: {
          seconds: "81",
          tripTag: "10304894",
          minutes: "1",
          isDeparture: "false",
          block: "506",
          dirTag: "5____I_S20",
          epochTime: "1634919390126",
          vehicle: "8746",
        },
        title: "Inbound to Transit Center",
      },
    },
    {
      routeTag: "5R",
      stopTag: "4230",
      routeTitle: "5R-Fulton Rapid",
      agencyTitle: "San Francisco Muni",
      message: [
        {
          text: "Masks are required. Visit sfmta.com/COVID19 for more info.",
          priority: "Low",
        },
        {
          text: "Text COVID19SF to 888-777 for official updates. Visit sfdph.org",
          priority: "Low",
        },
        {
          text: "Predictions may be unavailable. Service every 10 minutes or less",
          priority: "Normal",
        },
      ],
      stopTitle: "Fulton St & Masonic Ave",
      direction: {
        prediction: [
          {
            seconds: "332",
            tripTag: "10306938",
            minutes: "5",
            isDeparture: "false",
            block: "543",
            dirTag: "5R___I_F00",
            epochTime: "1634919641657",
            vehicle: "5832",
          },
          {
            seconds: "1032",
            tripTag: "10306937",
            minutes: "17",
            isDeparture: "false",
            block: "532",
            dirTag: "5R___I_F00",
            epochTime: "1634920341344",
            vehicle: "5787",
          },
        ],
        title: "Inbound to Transit Center",
      },
    },
  ],
};

export const saturdayMorningMcAllisterAndBaker = {
  copyright: "All data copyright San Francisco Muni 2021.",
  predictions: {
    routeTag: "5",
    stopTag: "5385",
    routeTitle: "5-Fulton",
    agencyTitle: "San Francisco Muni",
    message: [
      {
        text: "Masks are required. Visit sfmta.com/COVID19 for more info.",
        priority: "Low",
      },
      {
        text: "Text COVID19SF to 888-777 for official updates. Visit sfdph.org",
        priority: "Low",
      },
      {
        text: "Predictions may be unavailable. Buses every 10 minutes or less",
        priority: "Normal",
      },
    ],
    stopTitle: "McAllister St & Baker St",
    direction: {
      prediction: [
        {
          seconds: "332",
          tripTag: "10305207",
          minutes: "5",
          isDeparture: "false",
          block: "514",
          dirTag: "5____I_F00",
          epochTime: "1635014672203",
          vehicle: "5824",
        },
        {
          seconds: "1085",
          tripTag: "10305206",
          minutes: "18",
          isDeparture: "false",
          block: "509",
          dirTag: "5____I_F00",
          epochTime: "1635015425494",
          vehicle: "5759",
        },
        {
          seconds: "1258",
          tripTag: "10305205",
          minutes: "20",
          isDeparture: "false",
          block: "501",
          dirTag: "5____I_F00",
          epochTime: "1635015598584",
          vehicle: "5869",
        },
      ],
      title: "Inbound to Transit Center",
    },
  },
};

export const saturdayMorningMcAllisterAndDivisadero = {
  copyright: "All data copyright San Francisco Muni 2021.",
  predictions: [
    {
      routeTag: "5R",
      stopTag: "5390",
      routeTitle: "5R-Fulton Rapid",
      agencyTitle: "San Francisco Muni",
      dirTitleBecauseNoPredictions: "Inbound to Transit Center",
      message: [
        {
          text: "Masks are required. Visit sfmta.com/COVID19 for more info.",
          priority: "Low",
        },
        {
          text: "Text COVID19SF to 888-777 for official updates. Visit sfdph.org",
          priority: "Low",
        },
      ],
      stopTitle: "McAllister St & Divisadero St",
    },
    {
      routeTag: "5",
      stopTag: "5390",
      routeTitle: "5-Fulton",
      agencyTitle: "San Francisco Muni",
      message: [
        {
          text: "Masks are required. Visit sfmta.com/COVID19 for more info.",
          priority: "Low",
        },
        {
          text: "Text COVID19SF to 888-777 for official updates. Visit sfdph.org",
          priority: "Low",
        },
        {
          text: "Predictions may be unavailable. Buses every 10 minutes or less",
          priority: "Normal",
        },
      ],
      stopTitle: "McAllister St & Divisadero St",
      direction: {
        prediction: [
          {
            seconds: "433",
            tripTag: "10305207",
            minutes: "7",
            isDeparture: "false",
            block: "514",
            dirTag: "5____I_F00",
            epochTime: "1635014773201",
            vehicle: "5824",
          },
          {
            seconds: "1186",
            tripTag: "10305206",
            minutes: "19",
            isDeparture: "false",
            block: "509",
            dirTag: "5____I_F00",
            epochTime: "1635015526492",
            vehicle: "5759",
          },
          {
            seconds: "1359",
            tripTag: "10305205",
            minutes: "22",
            isDeparture: "false",
            block: "501",
            dirTag: "5____I_F00",
            epochTime: "1635015699582",
            vehicle: "5869",
          },
        ],
        title: "Inbound to Transit Center",
      },
    },
  ],
};
