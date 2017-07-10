import { Request, Response, Router } from "express";

const countRouter: Router = Router();

const numbers = []

const getResponse = () => ({
  numbers,
  total: numbers.reduce((total, value) => value + total, 0)
})

countRouter.post("/", (request: Request, response: Response) => {
  numbers.unshift(parseInt(request.body.number) || 0)
  response.json(getResponse())
});

countRouter.get("/", (request: Request, response: Response) => {
  response.json(getResponse())
});

export { countRouter };
