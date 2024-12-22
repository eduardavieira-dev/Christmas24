import { Request, Response } from 'express';
import { deletePersonService } from '../../servlces/delete-person-service';

export const deletePersonController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string | undefined;

        if (!id) {
            throw new Error('The "id" parameter was not supplied in the query.');
        }

        await deletePersonService(id);

        res.status(200).json({
            message: 'Deletion successfully completed.',
        });
    } catch (error) {
        res.status(404).json({
            message: (error as Error).message,
        });
    }
};
