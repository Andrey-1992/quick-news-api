import express from 'express';
const app = express();

import indexRoute from './routes/index'

app.use(express.json());
app.use(indexRoute)

app.listen(4000, () => {
  console.log("Server running on port 4000")
})