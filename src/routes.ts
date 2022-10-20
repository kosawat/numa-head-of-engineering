import { Express, Request, Response } from "express";

import {
  createReservationHandler,
  getAllReservationsHandler,
  getReservationHandler,
} from "./controllers/reservation.controller";

function routes(app: Express) {
  // API Server Home
  app.get("/", (req: Request, res: Response) =>
    res.status(200).json({ message: "API is Running" })
  );

  // Create a new reservation
  app.post("/api/reservations", createReservationHandler);

  // Get all reservations
  app.get("/api/reservations", getAllReservationsHandler);

  // Get a reservation by ID
  app.get("/api/reservations/:id", getReservationHandler);

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
