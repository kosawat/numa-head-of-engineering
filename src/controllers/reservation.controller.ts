import { Request, Response } from "express";

import { CreateReservationInput } from "../schema/reservation.schema";
import { createReservation } from "../services/reservation.service";
import logger from "../utils/logger";

export async function createReservationHandler(
  req: Request<{}, {}, CreateReservationInput["body"]>,
  res: Response
) {
  const body = req.body;

  try {
    const product = await createReservation(body);

    return res.status(201).send(product);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Server Error", errors: error });
  }
}
