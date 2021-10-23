import {
  GetPredictionsResponseType,
  PredictionRowType,
  VehiclePredictionType,
} from "app/types";

/**
 * Prediction and VehiclePrediction can be Object literal or Array
 * [item].flat() ensures consistent interface for mapping
 */
export const ensureArray = (arg) => [arg].flat();

/**
 * Curried function which first accepts routeTag
 * Then extracts relevant view data from a VehiclePrediction
 * @param VehiclePrediction
 * @returns PredictionRow
 */
export const getPredictionRow =
  (routeTag: string) => (vp: VehiclePredictionType) => ({
    routeTag,
    minutes: vp.minutes,
    vehicle: vp.vehicle,
  });

/**
 * Takes a response from the Nextbus servers and processes it for the view
 *
 * Prediction and VehiclePrediction can be Object literal or Array
 * [item].flat() ensures consistent interface for mapping
 *
 * @param GetPredictionsResponseType
 * @returns PredictionRowType
 */
export const parseResponse = (
  resp: GetPredictionsResponseType
): PredictionRowType[] => {
  const predictions = ensureArray(resp.predictions);

  const result = predictions.map((p) => {
    const routeTag = p.routeTag;

    if (!p?.direction || p.dirTitleBecauseNoPredictions) {
      //   console.log("Prediction is missing direction: ", p);
      return [];
    }

    const vehiclePredictions = ensureArray(p.direction.prediction);

    return vehiclePredictions.map(getPredictionRow(routeTag));
  });

  return result.flat();
};
