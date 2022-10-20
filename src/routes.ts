import { Express, Request, Response } from "express";

function routes(app: Express) {
  // API Server Home
  app.get("/", (req: Request, res: Response) =>
    res.status(200).json({ message: "API is Running" })
  );

  // Create a new reservation
  app.post("/api/reservations", (req: Request, res: Response) => {
    console.log(`POST a reservation: ${JSON.stringify(req.body)}`);
    res.send("POST /api/reservations is called");
  });

  // Get all reservations
  app.get("/api/reservations", (req: Request, res: Response) => {
    console.log(`GET all reservations`);
    res.send("GET /api/reservations is called");
  });

  // Get a reservation by ID
  app.get("/api/reservations/:reservationId", (req: Request, res: Response) => {
    console.log(`GET reservation ID: ${req.params.reservationId}`);
    res.send("GET /api/reservations/:reservationId is called");
  });

  // Update a reservation by ID
  app.patch(
    "/api/reservations/:reservationId",
    (req: Request, res: Response) => {
      console.log(`Update reservation ID: ${req.params.reservationId}`);
      res.send("PATCH /api/reservations/:reservationId is called");
    }
  );
}

export default routes;
