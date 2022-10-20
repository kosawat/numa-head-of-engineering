# Numa Head of Engineering
First of all, here is the submission of Product case.

[Product case results](https://github.com/kosawat/numa-head-of-engineering/blob/master/Numa-Head_of_engineering_KSukchaya.pdf)

## Numa's Head of Engineering hands-on coding challenge
### Notes & Assumptions
- Backend API server (Node, Express, TypeScipt) is implemented in this challenge.
- Database for this challenge is MongoDB.
- MongoDB connection string is stored in .env file.
- There is no authentication check in this challenge.
- Only API endpoints for Reservation CRUD operations are implemented as follows:
  - POST /api/reservations to create a new reservation.
  - GET /api/reservations to get all reservations.
  - GET /api/reservations/:id to get a reservation by id.
  - PATCH /api/reservations/:id to update a reservation by id.
  - DELETE /api/reservations/:id to delete a reservation by id.
- The Reservation Schema is simplified to just enough for building a “change billing address” feature.
