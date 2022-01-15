import express from 'express';
const app = express(); 
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';

app.locals.title = 'Quick News Server'
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(indexRoutes);

app.get('/', (req, res) => {
  res.status(200).send(`You've reached the ${app.locals.title} API `)
});

app.listen(3000, () => {
  console.log(`${app.locals.title} is running on ${app.get('port')} port`)
});