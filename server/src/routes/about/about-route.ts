import express from 'express';
import { aboutController } from '../../controllers/about/about-controller';

const indexRouter = express.Router();

indexRouter.get('/', aboutController);

export { indexRouter };
