import { DocumentDefinition } from "mongoose";

import ReservationModel, { ReservationDocument } from "../models/reservation.model";

export async function createReservation(
  input: DocumentDefinition<Omit<ReservationDocument, "createdAt" | "updatedAt">>
) {
  return ReservationModel.create(input);
}

export async function findReservations() {
    return ReservationModel.find().lean();
  }