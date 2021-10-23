import { GetPredictionsResponseType } from "app/types";
import {
  PREDICTION_URL,
  MOCK_PREDICTION_URL,
  STOP_ID_PARAM,
} from "app/constants";

export const apiClient = {
  getPredictions: async (stopId: string) => {
    const url = PREDICTION_URL.replace(STOP_ID_PARAM, stopId);

    const response = await fetch(url);
    const result: GetPredictionsResponseType = await response.json();

    return result;
  },
  getMockPredictions: async (stopId: string) => {
    const url = MOCK_PREDICTION_URL.replace(STOP_ID_PARAM, stopId);

    const response = await fetch(url);
    const result: GetPredictionsResponseType = await response.json();

    return result;
  },
};
