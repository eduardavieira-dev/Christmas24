import { findAllPeopleRepository } from '../repositories/find-all-people-repository';

export const findAllPeopleService = async () => {
    try {
        const people = await findAllPeopleRepository();

        return people;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
