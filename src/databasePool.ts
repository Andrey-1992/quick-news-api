import { Pool} from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'Turing21.',
  port: 5432
})