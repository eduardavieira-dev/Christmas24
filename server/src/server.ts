import express, { Request, Response } from 'express';
import { configureCORS } from './middlewares/cors-middleware';
import { errorMiddleware } from './middlewares/error-middleware';
import { routes } from './routes';

const app = express();

configureCORS(app);
app.use(errorMiddleware);
app.use(express.json());

routes(app);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        message: 'Route not found.',
    });
});

export { app };
