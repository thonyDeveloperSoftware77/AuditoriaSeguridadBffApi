import { Router } from "express";
import { getActivo, postActivo, deleteActivo, putActivo} from "../Controllers/activoController";
const router = Router();

router.post('/org', getActivo);
router.post('/', postActivo);
router.put('/', putActivo);
router.delete('/', deleteActivo);

export default router;