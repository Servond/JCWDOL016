import mysql from "mysql2";
import {
  MYSQL_HOST,
  MYSQL_DB,
  MYSQL_PASSWORD,
  MYSQL_USER,
} from "./utils/env.config";

export default mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB,
});
