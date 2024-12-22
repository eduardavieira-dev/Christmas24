import { PersonInterface } from '../interfaces/person-interface';
import { Person } from '../models/person';

export const createPersonRepository = ({ recipient, sender, websiteLink, code }: PersonInterface) =>
    Person.create({
        recipient,
        sender,
        websiteLink,
        code,
    });
