import { Request, Response } from 'express';

export const Index = (req: Request, res: Response) => {
  console.log("Hello World!");
  res.send('Hello World!');
}