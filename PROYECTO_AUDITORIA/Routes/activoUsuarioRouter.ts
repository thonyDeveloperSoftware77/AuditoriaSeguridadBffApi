import { Router } from "express";
import { postActivoUsuario, deleteActivoUsuario} from "../Controllers/activoUsuarioController";
const router = Router();

router.post('/', postActivoUsuario);
router.delete('/', deleteActivoUsuario);

export default router;