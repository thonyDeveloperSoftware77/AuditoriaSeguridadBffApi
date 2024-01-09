import { Router } from "express";
import { getVerifys} from "../Controllers/verifyController";
const router = Router();

router.post('/', getVerifys);

export default router;