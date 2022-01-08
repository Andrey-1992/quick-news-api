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
    const response: QueryResult = await pool.query('INSERT INTO savednews (abstract, byline, title, multimediaurl, multimediacaption, urlink, section) VALUES ($1, $2, $3, $4, $5, $6, $7)', [abstract, byline, title, multimediaurl, multimediacaption, urlink, section]);
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


// {
//   "abstract": "Some activists called the agreement in Glasgow disappointing, but it established a clear consensus that all countries need to do much more.",
//   "byline": "By Brad Plumer and Lisa Friedman",
//   "title": "Negotiators Strike a Climate Deal, but World Remains Far From Limiting Warming",
//   "multimediaurl": "https://static01.nyt.com/images/2021/11/13/multimedia/13cli-cop26-final-group02/13cli-cop26-final-group02-superJumbo.jpg",
//   "multimediacaption": "Weston McKennie, center, with Tyler Adams and Christian Pulisic after McKennie’s goal doubled the Americans’ lead in the 85th minute."
//   "urlink": "https://www.nytimes.com/2021/11/13/climate/cop26-glasgow-climate-agreement.html",
//   "section": "climate",
// }