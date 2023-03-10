import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();

let conn: any;

if (!conn) {
  conn = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 3233,
    database: process.env.DATABASE_NAME,
  });
}

export { conn };
