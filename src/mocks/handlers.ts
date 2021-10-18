import { rest } from "msw";
import { createMockResponse } from "./responses";

// import { BAKER_ID, MASONIC_ID, DIVISADERO_ID } from "../constants";

export const handlers = [
  rest.get("/mock/:stationId", (req, res, ctx) => {
    console.log("Intercepted by MSW...");

    const { stationId } = req.params;

    return res(ctx.status(200), ctx.json(createMockResponse(stationId)));
  }),
];
