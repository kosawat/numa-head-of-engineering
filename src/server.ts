import express from "express";
import cors from "cors";
import helmet from "helmet";

import logger from "./utils/logger";
import { connectToDatabase } from "./utils/db";
import routes from "./routes";

const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

app.listen(PORT, async () => {
  // Database connection
  await connectToDatabase();

  // API routes
  routes(app);

  logger.info(`Server listening at port ${PORT}`);
});
