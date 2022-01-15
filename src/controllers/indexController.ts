import { Request, Response } from 'express';
import { pool } from '../databasePool'
import { QueryResult } from 'pg'

export const getSavedNews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM savednews');
    return res.status(200).json(response.rows);
  } 
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
}

export const storeNews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { 
      abstract,
      byline,
      title,
      multimediaurl,
      multimediacaption,
      urlink,
      section } = req.body;
    const response: QueryResult = await pool.query(
      'INSERT INTO savednews (abstract, byline, title, multimediaurl, multimediacaption, urlink, section) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
      [abstract, byline, title, multimediaurl, multimediacaption, urlink, section]);
    return res.status(200).json({
      message: 'This News have been store successfully!',
      body: {
        abstract,
        byline,
        title,
        multimediaurl,
        multimediacaption,
        urlink,
        section 
      }
    })
  } 
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
}

export const deleteNews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('DELETE FROM savednews WHERE id = $1', [id])
    return res.status(200).json(`News Successfully deleted with ID: ${id}`);
  } 
  catch(e) {
    console.log(e);
    return res.status(500).json('Internal Server Error')
  } 
}