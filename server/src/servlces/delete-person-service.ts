import { deletePersonRepository } from '../repositories/delete-person-repository';

export const deletePersonService = async (id: string) => {
    try {
        const deletedPerson = await deletePersonRepository(id);

        if (!deletedPerson) {
            throw new Error('Person not found.');
        }

        return deletedPerson;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
