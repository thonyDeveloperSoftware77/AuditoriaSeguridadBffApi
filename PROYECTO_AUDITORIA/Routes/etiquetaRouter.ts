import { Router } from "express";
import { getEtiquetas, postEtiqueta, deleteEtiqueta,putEtiqueta} from "../Controllers/etiquetaController";
const router = Router();

router.get('/', getEtiquetas);
router.post('/', postEtiqueta);
router.put('/', putEtiqueta);
router.delete('/', deleteEtiqueta);

export default router;