import { Person } from '../models/person';

export const findAllPeopleRepository = () => Person.find();
