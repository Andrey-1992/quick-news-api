import {Request, Response} from 'express';

export const getSavedNews = (req: Request, res: Response) => {
  res.send('test saved news from controllers file')
}