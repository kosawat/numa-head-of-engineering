import { Express, Request, Response } from "express";

function routes(app: Express) {
  // API Server Home
  app.get("/", (req: Request, res: Response) =>
    res.status(200).json({ message: "API is Running" })
  );

  // Health check
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
}

export default routes;
