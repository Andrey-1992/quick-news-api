import express from 'express';
import * as cors from 'cors';
const app = express(); 

import indexRoutes from './routes/indexRoutes';

app.locals.title = 'Quick News Server'
// app.set('port', process.env.DB_PORT || 3000);
const port: any = process.env.PORT || 4000;

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: API_URL,
  preflightContinue: false,
};

app.use(express.json());
app.use(cors())
app.use(indexRoutes);

app.get('/', (req, res) => {
  res.status(200).send(`You've reached the ${app.locals.title} API `)
});

app.listen(port, "0.0.0.0", () => {
  console.log(`${app.locals.title} is running on port: ${app.get('port')}`)
});
