import { Router } from "express";
import { getCategorias, postCategoria, deleteCategoria,putCategoria} from "../Controllers/categoriaController";
const router = Router();

router.get('/', getCategorias);
router.post('/', postCategoria);
router.put('/', putCategoria);
router.delete('/', deleteCategoria);

export default router;