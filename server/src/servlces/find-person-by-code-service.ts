import { PersonInterface } from '../interfaces/person-interface';
import { findPersonByCodeRepository } from '../repositories/find-person-by-code-repository';

export const findPersonByCodeService = async (
    personCode: string
): Promise<PersonInterface | null> => {
    try {
        const foundPerson = await findPersonByCodeRepository(personCode);

        return foundPerson;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
