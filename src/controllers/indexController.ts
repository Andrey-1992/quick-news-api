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
  // console.log(req.body)
  const { 
    abstract,
    byline,
    title,
    multimediaurl,
    multimediacaption,
    urlink,
    section } = req.body;
    console.log(abstract,
      byline,
      title,
      multimediaurl,
      multimediacaption,
      urlink,
      section);
  return res.send('recived')
  // try {
  //   const response: QueryResult = await pool.query('SELECT * FROM savednews');
  //   return res.status(200).json(response.rows);
  // } 
  // catch(e) {
  //   console.log(e);
  //   return res.status(500).json('Internal Server Error')
  // } 
}

// export const deleteNews = async (req: Request, res: Response): Promise<Response> => {
//   try {
//     const response: QueryResult = await pool.query('SELECT * FROM savednews');
//     return res.status(200).json(response.rows);
//   } 
//   catch(e) {
//     console.log(e);
//     return res.status(500).json('Internal Server Error')
//   } 
// }