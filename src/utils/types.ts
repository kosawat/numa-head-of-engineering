export type BillingAddress = {
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postalCode: string;
  countryCode: string;
  regionCode: string;
  taxId: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type Booking = {
  id: string;
};

export type Person = {
  firstName: string;
  lastName: string;
};
