import express from 'express';
import { indexController } from '../controllers/index-controller';

const indexRouter = express.Router();

indexRouter.get('/', indexController);

export { indexRouter };
