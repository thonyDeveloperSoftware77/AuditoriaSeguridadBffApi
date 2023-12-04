import { Router } from "express";
import { getOrganizaciones, postOrganizacion, deleteOrganizacion,putOrganizacion} from "../Controllers/organizacionController";
const router = Router();

router.get('/', getOrganizaciones);
router.post('/', postOrganizacion);
router.put('/', putOrganizacion);
router.delete('/', deleteOrganizacion);

export default router;