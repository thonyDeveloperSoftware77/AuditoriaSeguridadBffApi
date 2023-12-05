import { Router } from "express";
import { postActivoGrupo, deleteActivoGrupo} from "../Controllers/activoGrupoController";
const router = Router();

router.post('/', postActivoGrupo);
router.delete('/', deleteActivoGrupo);

export default router;