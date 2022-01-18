import express from 'express';
// import * as cors from 'cors';
const app = express(); 

var cors = require('cors');

import indexRoutes from './routes/indexRoutes';

app.locals.title = 'Quick News Server'
const port: any = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(indexRoutes);

app.get('/', (req, res) => {
  res.status(200).send(`You've reached the ${app.locals.title} API `)
});

app.listen(port, "0.0.0.0", () => {
  console.log(`${app.locals.title} is running on port: ${app.get('port')}`)
});
