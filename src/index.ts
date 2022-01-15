import express from 'express';
const app = express(); 
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';

app.locals.title = 'Strange prompts'
app.set('port', process.env.PORT || 3001);

app.use(express.json());
app.use(indexRoutes);

app.get('/', (req, res) => {
  res.status(200).send(`You've reached the ${app.locals.title} API `)
});

app.listen(3000, () => {
  console.log(`Server is listening on ${}`)
});