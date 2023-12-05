import { Router } from "express";
import { postActivoReviewerGrupo, deleteActivoReviewerGrupo} from "../Controllers/activoReviewerGrupoController";
const router = Router();

router.post('/', postActivoReviewerGrupo);
router.delete('/', deleteActivoReviewerGrupo);

export default router;