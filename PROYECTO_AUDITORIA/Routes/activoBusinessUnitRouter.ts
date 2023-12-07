import { Router } from "express";
import { postActivoBusinessUnit, deleteActivoBusinessUnit} from "../Controllers/activoBusinessUnitController";
const router = Router();

router.post('/', postActivoBusinessUnit);
router.delete('/', deleteActivoBusinessUnit);

export default router;