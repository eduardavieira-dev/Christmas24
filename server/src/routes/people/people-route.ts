import express from 'express';
import { createPersonController } from '../../controllers/people/create-person-controller';
import { deletePersonController } from '../../controllers/people/delete-person-controller';
import { findAllPeopleController } from '../../controllers/people/find-all-person-controller';
import { findPersonByCodeController } from '../../controllers/people/find-person-by-code-controller';
import { updatePersonController } from '../../controllers/people/update-person-controller';
import { verifyToken } from '../../middlewares/token-middleware';

const peopleRouter = express.Router();

peopleRouter.get('/', verifyToken, findAllPeopleController);
peopleRouter.get('/search', verifyToken, findPersonByCodeController);
peopleRouter.post('/', verifyToken, createPersonController);
peopleRouter.put('/:id', verifyToken, updatePersonController);
peopleRouter.delete('/:id', verifyToken, deletePersonController);

export { peopleRouter };
