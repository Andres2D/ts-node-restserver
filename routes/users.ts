import { Router } from 'express';
import { deletetUser, getUser, getUsers, postUser, puttUser } from '../controllers/users';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', puttUser);
router.delete('/:id', deletetUser);

export default router;
