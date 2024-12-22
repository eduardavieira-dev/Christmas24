import express from 'express';
import { indexController } from '../controllers/index/index-controller';

const routes = (app: express.Express) => {
    app.use('/', indexController);
};

export { routes };
