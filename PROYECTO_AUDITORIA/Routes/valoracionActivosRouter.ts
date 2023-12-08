import { Router } from "express";
import { getValoracionActivos, postValoracionActivo, deleteValoracionActivo,putValoracionActivo} from "../Controllers/valoracionActivoController";
const router = Router();

router.post('/org', getValoracionActivos);
router.post('/', postValoracionActivo);
router.put('/', putValoracionActivo);
router.delete('/', deleteValoracionActivo);

export default router;