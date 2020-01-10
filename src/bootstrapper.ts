import { Container } from "inversify";
import "reflect-metadata";
import { App } from "./app";
import { config } from './configs/config'
import "./controllers.module";

const container = new Container();
const app = new App(config, container);
app.configureServices();
app.initialize();
