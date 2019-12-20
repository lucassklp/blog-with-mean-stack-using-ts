import express from 'express';
import { config } from './configs/config'

const app = express();

app.use('/healthcheck', (req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});


app.listen(config.port, err => {
  if (err) {
    return console.error(err);
  }
  console.log(`Using environment "${config.environmentName}"`)
  console.log(`Server is listening on ${config.port}`);
});