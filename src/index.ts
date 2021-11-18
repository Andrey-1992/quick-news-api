import express from 'express';
const app = express();

import indexRoute from './routes/index'


app.listen(4000, () => {
  console.log("Server running on port 4000")
})