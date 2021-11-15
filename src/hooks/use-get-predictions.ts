import { apiClient } from "../api/client";
import { useQuery } from "react-query";

export const useGetPredictions = async () => {
  const { data, isLoading, error } = useQuery("mockTest", () =>
    // apiClient.getPredictions()
    console.log("TODO:")
  );

  return { data, isLoading, error };
};
