import { Router } from "express";
import { postDepartamentoUsuario, deleteDepartamentoUsuario} from "../Controllers/departamentoUsuarioController";
const router = Router();

router.post('/', postDepartamentoUsuario);
router.delete('/', deleteDepartamentoUsuario);

export default router;