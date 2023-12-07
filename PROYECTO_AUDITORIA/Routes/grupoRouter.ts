import { Router } from "express";
import { getGrupos, postGrupo, deleteGrupo,putGrupo} from "../Controllers/grupoController";
const router = Router();

router.post('/org', getGrupos);
router.post('/', postGrupo);
router.put('/', putGrupo);
router.delete('/', deleteGrupo);

export default router;