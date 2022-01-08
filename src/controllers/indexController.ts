import { Request, Response } from 'express';
import { pool } from '../databasePool'
import { QueryResult } from 'pg'

export const getSavedNews = async (req: Request, res: Response) => {
  // res.send('test saved news from controllers file')
  const response: QueryResult = await pool.query('SELECT * FROM savednews');
  res.status(200).json(response.rows)
}