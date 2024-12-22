import { Person } from '../models/person';

export const findPersonByIdRepository = (personId: string) => Person.findById(personId);
