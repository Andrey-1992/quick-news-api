import { Pool} from 'pg';
require('dotenv').config();
console.log(process.env.DB_USER)

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'Turing21.',
  port: 5432,
  database: 'quicknew'
})