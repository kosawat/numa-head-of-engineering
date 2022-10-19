import mongoose from "mongoose";
import * as dotenv from "dotenv";

import logger from "./logger";

dotenv.config();

const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "YOUR DB CONNECT STRING";

export async function connectToDatabase() {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Connected to database");
  } catch (e) {
    logger.error(e, "Failed to connect to database. Goodbye");
    process.exit(1);
  }
}
