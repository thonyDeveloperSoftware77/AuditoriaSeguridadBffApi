import { Router } from "express";
import { postDepartamentoGrupo, deleteDepartamentoGrupo} from "../Controllers/departamentoGrupoController";
const router = Router();

router.post('/', postDepartamentoGrupo);
router.delete('/', deleteDepartamentoGrupo);

export default router;