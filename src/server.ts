import express from "express";
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

const server = app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
