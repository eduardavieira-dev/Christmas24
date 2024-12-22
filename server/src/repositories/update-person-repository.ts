import mongoose from 'mongoose';
import { PersonInterface } from '../interfaces/person-interface';
import { Person } from '../models/person';

export const updatePersonRepository = async (
    id: string,
    personData: Partial<PersonInterface>
): Promise<mongoose.Document | null> => {
    const updatePerson = await Person.findOneAndUpdate(
        { _id: id },
        { ...personData },
        { rawResult: true }
    );

    return updatePerson;
};
