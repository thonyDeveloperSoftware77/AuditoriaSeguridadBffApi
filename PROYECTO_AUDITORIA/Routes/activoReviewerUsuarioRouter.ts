import { Router } from "express";
import { postActivoReviewerUsuario, deleteActivoReviewerUsuario} from "../Controllers/activoReviewerUsuarioController";
const router = Router();

router.post('/', postActivoReviewerUsuario);
router.delete('/', deleteActivoReviewerUsuario);

export default router;