import { Request, Response } from 'express';
import { findAllPeopleService } from '../../servlces/find-all-people-service';

export const findAllPeopleController = async (req: Request, res: Response) => {
    try {
        const people = await findAllPeopleService();

        res.status(200).json({
            People: people,
        });
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};
