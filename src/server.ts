import express from "express";
import cors from "cors";
import helmet from "helmet";

import logger from "./utils/logger";
import { connectToDatabase } from "./utils/db";

const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

const server = app.listen(PORT, async () => {
  await connectToDatabase();
  logger.info(`Server listening at port ${PORT}`);
});
