import express from 'express';
const app = express(); 
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';

app.locals.title = 'Quick News Server'
// app.set('port', process.env.DB_PORT || 3000);
const port: any = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())
app.use(indexRoutes);

app.get('/', (req, res) => {
  res.status(200).send(`You've reached the ${app.locals.title} API `)
});

app.listen(port, "0.0.0.0", () => {
  console.log(`${app.locals.title} is running on port: ${app.get('port')}`)
});
