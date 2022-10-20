import { Request, Response } from "express";

import {
  CreateReservationInput,
  ReadReservationInput,
  UpdateReservationInput,
} from "../schema/reservation.schema";

import {
  createReservation,
  findAllReservations,
  findAndUpdateReservation,
  findReservation,
} from "../services/reservation.service";

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

export async function getAllReservationsHandler(req: Request, res: Response) {
  try {
    const reservations = await findAllReservations();

    return res.send(reservations);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Server Error", errors: error });
  }
}

export async function getReservationHandler(
  req: Request<ReadReservationInput["params"]>,
  res: Response
) {
  const id = req.params.id;

  try {
    const reservation = await findReservation({ id });

    if (!reservation) res.sendStatus(404);

    return res.send(reservation);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Server Error", errors: error });
  }
}

export async function updateReservationHandler(
  req: Request<UpdateReservationInput["params"]>,
  res: Response
) {
  const id = req.params.id;

  const update = req.body;

  try {
    const reservation = await findReservation({ id });

    if (!reservation) return res.sendStatus(404);

    const updatedReservation = await findAndUpdateReservation({ id }, update, {
      new: true,
    });

    return res.send(updatedReservation);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Server Error", errors: error });
  }
}
