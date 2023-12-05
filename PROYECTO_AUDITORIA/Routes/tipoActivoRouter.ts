import { Router } from "express";
import { getTipoActivos, postTipoActivo, deleteTipoActivo,putTipoActivo} from "../Controllers/tipoActivoController";
const router = Router();

router.get('/', getTipoActivos);
router.post('/', postTipoActivo);
router.put('/', putTipoActivo);
router.delete('/', deleteTipoActivo);

export default router;