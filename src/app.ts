import { IConfig } from "./configs/config";
import { Container } from "inversify";
import express from 'express';

export class App {
    constructor(private config: IConfig){

    }

    public configureServices(container: Container){

    }

    public initialize(server: express.Express){
        server.use('/healthcheck', (req, res) => {
            res.status(200).json({ uptime: process.uptime() });
          });
          
          server.listen(this.config.port, err => {
            if (err) {
              return console.error(err);
            }
            console.log(`Using environment "${this.config.environmentName}"`)
            console.log(`Server is listening on ${this.config.port}`);
          });
    }
}