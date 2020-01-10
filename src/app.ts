import * as bodyParser from 'body-parser' 
import { Container } from "inversify";
import { InversifyExpressServer } from 'inversify-express-utils';
import { IConfig } from "./configs/config";

export class App {
    constructor(private config: IConfig, private container: Container) {

    }

    public configureServices() {

    }

    public initialize() {
      const server = new InversifyExpressServer(this.container);
      server.setConfig((application) => {
        application.use(bodyParser.urlencoded({
          extended: true,
        }));
        application.use(bodyParser.json());
      });

      const express = server.build();

      express.listen(this.config.port, (err) => {
          if (err) {
            return console.error(err);
          }
          console.log(`Using environment "${this.config.environmentName}"`);
          console.log(`Server is listening on ${this.config.port}`);
        });
    }
}
