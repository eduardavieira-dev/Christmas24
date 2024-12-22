import { Person } from '../models/person';

export const deletePersonRepository = (id: string) =>
    Person.findOneAndDelete({ _id: id }, { rawResult: true });
