import express from 'express'
import bodyParser from 'body-parser'
import { Routers } from './routes';
import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    config({
        path: './.env'
    })
}

const app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = new Routers(app)

app.listen(port);
