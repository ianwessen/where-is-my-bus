import { StationIdType, PredictionType } from "./../types/index";
import { stationMap } from "../constants";

export const mockPredictions: PredictionType[] = [
  {
    seconds: "0",
    tripTag: "0",
    minutes: "0",
    isDeparture: "false",
    block: "0",
    dirTag: "5____I_F00",
    epochTime: "1634525129082",
    vehicle: "5678",
  },
  {
    seconds: "0",
    tripTag: "0",
    minutes: "2",
    isDeparture: "false",
    block: "0",
    dirTag: "5____I_F00",
    epochTime: "1634525129082",
    vehicle: "5768",
  },
  {
    seconds: "0",
    tripTag: "0",
    minutes: "5",
    isDeparture: "false",
    block: "0",
    dirTag: "5____I_F00",
    epochTime: "1634525129082",
    vehicle: "5867",
  },
  {
    seconds: "0",
    tripTag: "0",
    minutes: "8",
    isDeparture: "false",
    block: "0",
    dirTag: "5____I_F00",
    epochTime: "1634525129082",
    vehicle: "5767",
  },
  {
    seconds: "0",
    tripTag: "0",
    minutes: "11",
    isDeparture: "false",
    block: "0",
    dirTag: "5____I_F00",
    epochTime: "1634525129082",
    vehicle: "5786",
  },
];

/**
 * @param stationId
 * @returns A prediction object, or list of prediction objects. Inconsistent
 * type is intentional reproduced behavior from NextBus API
 */
export const createMockResponse = (stationId: StationIdType) => {
  const { routeTag, stopTag, routeTitle, agencyTitle, stopTitle } =
    stationMap[stationId];

  const getRandInt = () => Math.floor(Math.random() * mockPredictions.length);

  const randInt = getRandInt();

  let prediction: PredictionType | PredictionType[] = mockPredictions.slice(
    0,
    1 + randInt
  );

  if (randInt === 4) {
    const newRandInt = getRandInt();
    prediction = mockPredictions[newRandInt];
  }

  return {
    copyright: "All data copyright San Francisco Muni 2021.",
    predictions: {
      routeTag,
      stopTag,
      routeTitle,
      agencyTitle,
      stopTitle,
      direction: {
        prediction,
        title: "Inbound to Transit Center",
      },
    },
  };
};
