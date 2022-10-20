import { object, string, number, date, array, TypeOf } from "zod";

const payload = {
  body: object({
    id: string({
      required_error: "ID is required",
    }),
    propertyId: string({
      required_error: "propertyId is required",
    }),
    pmsId: string({
      required_error: "pmsId is required",
    }),
    arrival: date({
      required_error: "Arrival date is required",
    }),
    departure: date({
      required_error: "Departure date is required",
    }),
    adults: number({
      required_error: "Number of adult guests is required",
    }),
    primaryGuest: object({
      firstName: string({
        required_error: "Primary Guest Firstname is required",
      }),
      lastName: string({
        required_error: "Primary Guest Lastname is required",
      }),
    }),
    additionalGuests: array(
      object({
        firstName: string({
          required_error: "Primary Guest Firstname is required",
        }),
        lastName: string({
          required_error: "Primary Guest Lastname is required",
        }),
      })
    ),
    booker: object({
      firstName: string({
        required_error: "Booker Firstname is required",
      }),
      lastName: string({
        required_error: "Booker Lastname is required",
      }),
    }),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "Reservation ID is required",
    }),
  }),
};

export const createReservationSchema = object({
  ...payload,
});

export const updateReservationSchema = object({
  ...params,
});

export const getReservationSchema = object({
  ...params,
});

export const deleteReservationSchema = object({
  ...params,
});

export type CreateReservationInput = TypeOf<typeof createReservationSchema>;
export type UpdateReservationInput = TypeOf<typeof updateReservationSchema>;
export type ReadReservationInput = TypeOf<typeof getReservationSchema>;
export type DeleteReservationInput = TypeOf<typeof deleteReservationSchema>;
