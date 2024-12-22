import { PersonInterface } from '../interfaces/person-interface';
import { findPersonByIdRepository } from '../repositories/find-person-by-id';
import { updatePersonRepository } from '../repositories/update-person-repository';
import { validatePersonData } from '../validators/person-validator';

export const updatePersonService = async (id: string, personData: PersonInterface) => {
    try {
        validatePersonData(personData);

        const updatedPerson = await updatePersonRepository(id, personData);

        if (!updatedPerson) {
            throw new Error('Person not found.');
        }

        const updatedPersonDocument = await findPersonByIdRepository(id);

        if (!updatedPersonDocument) {
            throw new Error('Person not found.');
        }

        return updatedPersonDocument;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
