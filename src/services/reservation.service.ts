import { DocumentDefinition, FilterQuery, QueryOptions } from "mongoose";

import ReservationModel, {
  ReservationDocument,
} from "../models/reservation.model";

export async function createReservation(
  input: DocumentDefinition<
    Omit<ReservationDocument, "createdAt" | "updatedAt">
  >
) {
  return ReservationModel.create(input);
}

export async function findAllReservations() {
  return ReservationModel.find().lean();
}

export async function findReservation(
  query: FilterQuery<ReservationDocument>,
  options: QueryOptions = { lean: true }
) {
  return ReservationModel.findOne(query, {}, options);
}
