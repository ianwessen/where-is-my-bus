import { rest } from "msw";
import { fridayMorningFultonAndMasonicStop } from "app/mocks/responses";

export const handlers = [
  rest.get(/mock-prediction/, (req, res, ctx) => {
    console.log("Intercepted by MSW...");

    return res(ctx.status(200), ctx.json(fridayMorningFultonAndMasonicStop));
  }),
];
