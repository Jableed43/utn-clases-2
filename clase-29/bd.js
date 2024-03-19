import mysql from "mysql2";
import util from "util";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  port: 3300,
});

pool.query = util.promisify(pool.query);
