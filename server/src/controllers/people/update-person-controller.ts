import { Request, Response } from 'express';
import { PersonInterface } from '../../interfaces/person-interface';
import { updatePersonService } from '../../servlces/update-person-service';
import { validatePersonData } from '../../validators/person-validator';

export const updatePersonController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string | undefined;
        const personData = req.body as PersonInterface;

        if (!id) {
            throw new Error('The "id" parameter was not supplied in the query.');
        }

        validatePersonData(personData);

        const updatedPerson = await updatePersonService(id, personData);

        res.status(200).json({
            message: 'Person data successfully updated.',
            Person: updatedPerson,
        });
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};
