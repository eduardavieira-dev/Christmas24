import express from 'express';
import { aboutController } from '../../controllers/about/about-controller';

const aboutRouter = express.Router();

aboutRouter.get('/', aboutController);

export { aboutRouter };
