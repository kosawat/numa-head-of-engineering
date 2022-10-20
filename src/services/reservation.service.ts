import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";

import ReservationModel, {
  ReservationDocument,
} from "../models/reservation.model";

export async function createReservation(
  input: DocumentDefinition<
    Omit<
      ReservationDocument,
      | "booking"
      | "travelPurpose"
      | "requestEInvoice"
      | "billingAddress"
      | "recipients"
      | "createdAt"
      | "updatedAt"
    >
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

export async function findAndUpdateReservation(
  query: FilterQuery<ReservationDocument>,
  update: UpdateQuery<ReservationDocument>,
  options: QueryOptions
) {
  return ReservationModel.findOneAndUpdate(query, update, options);
}

export async function deleteReservation(
  query: FilterQuery<ReservationDocument>
) {
  return ReservationModel.deleteOne(query);
}
