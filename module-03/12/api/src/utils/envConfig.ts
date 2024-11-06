import { config } from "dotenv";

config({
  path: ".env",
});

export const { PORT, SECRET_KEY, BASE_WEB_URL } = process.env;
