import { config } from "dotenv";
config({
  path: ".env",
});

export const { PORT, MOCK_API_URL } = process.env;
