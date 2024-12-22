import express from 'express';
import { aboutController } from '../controllers/about/about-controller';
import { peopleRouter } from './people/people-route';

const routes = (app: express.Express) => {
    app.use('/about', aboutController);
    app.use('/people', peopleRouter);
};

export { routes };
