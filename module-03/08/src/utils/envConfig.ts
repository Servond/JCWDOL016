import { config } from "dotenv";

config({
  path: ".env",
});

export const { PORT, SECRET_KEY } = process.env;
