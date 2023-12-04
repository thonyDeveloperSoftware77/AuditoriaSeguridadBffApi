import { Router } from "express";
import { getUsers, postUser, deleteUser, putUser} from "../Controllers/userController";
const router = Router();

router.get('/', getUsers);
router.post('/', postUser);
router.put('/', putUser);
router.delete('/', deleteUser) ;

export default router;