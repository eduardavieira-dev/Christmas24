import { PersonInterface } from '../interfaces/person-interface';
import { createPersonRepository } from '../repositories/create-person-repository';
import { validatePersonData } from '../validators/person-validator';

export const createPersonService = async (personData: PersonInterface) => {
    try {
        validatePersonData(personData);

        const createdPerson = await createPersonRepository(personData);

        return createdPerson;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
