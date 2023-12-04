import { Router } from "express";
import { getClasificaciones, postClasificacion, deleteClasificacion,putClasificacion} from "../Controllers/clasificacionController";
const router = Router();

router.get('/', getClasificaciones);
router.post('/', postClasificacion);
router.put('/', putClasificacion);
router.delete('/', deleteClasificacion);

export default router;