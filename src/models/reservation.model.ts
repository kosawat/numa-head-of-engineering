import mongoose from "mongoose";

import { BillingAddress, Booking, Person } from "../utils/types";

const bookingSchema = new mongoose.Schema({
  id: {
    type: String,
  },
});

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const billingAddressSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  regionCode: {
    type: String,
  },
  taxId: {
    type: String,
  },
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const reservationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    booking: {
      type: bookingSchema,
    },
    propertyId: {
      type: String,
      required: true,
    },
    pmsId: {
      type: String,
      required: true,
    },
    arrival: {
      type: Date,
      required: true,
    },
    departure: {
      type: Date,
      required: true,
    },
    adults: {
      type: Number,
      required: true,
    },
    primaryGuest: {
      type: personSchema,
      required: true,
    },
    additionalGuests: {
      type: [personSchema],
      required: true,
    },
    booker: {
      type: personSchema,
      required: true,
    },
    travelPurpose: {
      type: String,
      enum: ["Business", "Leisure"],
    },
    requestEInvoice: {
      type: Boolean,
    },
    billingAddress: {
      type: billingAddressSchema,
    },
    recipients: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export interface ReservationDocument extends mongoose.Document {
  id: string;
  booking:Booking;
  propertyId: string;
  pmsId: string;
  arrival: Date;
  departure: Date;
  adults: number;
  primaryGuest: Person;
  additionalGuests: [Person];
  booker: Person;
  travelPurpose: string;
  requestEInvoice: boolean;
  billingAddress: BillingAddress;
  recipients: [string];
  createdAt: Date;
  updatedAt: Date;
}

const ReservationModel = mongoose.model("Reservation", reservationSchema);

export default ReservationModel;
