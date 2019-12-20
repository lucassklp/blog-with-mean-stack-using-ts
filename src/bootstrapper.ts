import express from 'express';
import { config } from './configs/config'
import { Container } from "inversify";
import { App } from './app';

const container = new Container();
const app = new App(config);
app.configureServices(container);
app.initialize(express())