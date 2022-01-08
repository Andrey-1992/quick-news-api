import { Request, Response } from 'express';
import { pool } from '../databasePool'
import { QueryResult } from 'pg'

export const getSavedNews = async (req: Request, res: Response) => {
  // res.send('test saved news from controllers file')
  const response: QueryResult = await pool.query('SELECT * FROM quicknew');
  console.log(response.rows)
}