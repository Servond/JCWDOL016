import { config } from "dotenv";

config({
  path: ".env",
});

export const {
  PORT,
  MOCK_API_URL,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB,
} = process.env;
