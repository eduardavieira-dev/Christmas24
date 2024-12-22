import { Person } from '../models/person';

export const findPersonByCodeRepository = (codePerson: string) => {
    return Person.findOne({ code: codePerson }).exec();
};
