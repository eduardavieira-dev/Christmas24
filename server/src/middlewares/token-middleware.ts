import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const auth = req.headers.authorization;
        const authArray = auth?.split(' ');
        const secretKey: string = process.env.SECRET_KEY ?? '';

        if (typeof auth !== 'string' || auth.trim() === '') {
            res.status(401).json({ message: 'Token not informed.' });
            return;
        }

        if (authArray?.length !== 2 || authArray[0] !== 'Bearer') {
            res.status(401).json({ message: 'Invalid token.' });
            return;
        }

        const token = authArray[1];

        if (token !== secretKey) {
            res.status(401).json({ message: 'Invalid token.' });
            return;
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized access.' });
        return;
    }
};
