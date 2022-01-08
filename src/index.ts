import express from 'express';
const app = express(); 

import indexRoutes from './routes/indexRoutes'

app.use(express.json());
app.use(indexRoutes)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})