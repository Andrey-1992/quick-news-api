import {Request, Response} from 'express';

export const getSavedNews = (req: Request, res: Response) => {
  res.send('test get news')
}