import express, { Request, Response } from 'express';
import { configureCORS } from './middlewares/cors-middleware';
import { errorMiddleware } from './middlewares/error-middleware';
import { indexRouter } from './routes/index-route';

const app = express();

app.use(express.json());
configureCORS(app);
app.use(errorMiddleware);

app.use('/', indexRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        message: 'Rota não encontrada.',
    });
});

export { app };
