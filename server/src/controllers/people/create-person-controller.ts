import { PersonInterface } from '../../interfaces/person-interface';
import { createPersonService } from '../../servlces/create-person-service';
import { validatePersonData } from '../../validators/person-validator';
import { Request, Response } from 'express';

export const createPersonController = async (req: Request, res: Response) => {
    try {
        const personData = req.body as PersonInterface;

        validatePersonData(personData);

        const createdPerson = await createPersonService(personData);

        res.status(201).json({
            message: 'Person successfully created.',
            Person: createdPerson,
        });
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message,
        });
    }
};
