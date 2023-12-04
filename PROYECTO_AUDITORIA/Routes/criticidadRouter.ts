import { Router } from "express";
import { getCriticidad, postCriticidad, deleteCriticidad,putCriticidad} from "../Controllers/criticidadController";
const router = Router();

router.get('/', getCriticidad);
router.post('/', postCriticidad);
router.put('/', putCriticidad);
router.delete('/', deleteCriticidad);

export default router;