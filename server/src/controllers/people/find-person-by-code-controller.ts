import { Request, Response } from 'express';
import { findPersonByCodeService } from '../../servlces/find-person-by-code-service';

export const findPersonByCodeController = async (req: Request, res: Response) => {
    try {
        const code = req.params.code as string | undefined;

        if (!code) {
            throw new Error('The "code" parameter was not supplied in the query.');
        }

        const foundPerson = await findPersonByCodeService(code);

        if (!foundPerson) {
            res.status(404).json({
                message: 'Person not found.',
            });

            return;
        }

        res.status(200).json({
            Person: foundPerson,
        });
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message,
        });
    }
};
