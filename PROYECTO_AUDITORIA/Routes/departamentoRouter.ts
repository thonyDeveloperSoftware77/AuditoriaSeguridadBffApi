import { Router } from "express";
import { getDepartamento, postDepartamento, deleteDepartamento,putDepartamento} from "../Controllers/departamentoController";
const router = Router();

router.post('/org', getDepartamento);
router.post('/', postDepartamento);
router.put('/', putDepartamento);
router.delete('/', deleteDepartamento);

export default router;