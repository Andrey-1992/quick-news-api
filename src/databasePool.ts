import { Pool} from 'pg';
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  }
})