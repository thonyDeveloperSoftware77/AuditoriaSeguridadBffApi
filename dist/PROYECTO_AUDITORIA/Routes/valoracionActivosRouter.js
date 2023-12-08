"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const valoracionActivoController_1 = require("../Controllers/valoracionActivoController");
const router = (0, express_1.Router)();
router.post('/org', valoracionActivoController_1.getValoracionActivos);
router.post('/', valoracionActivoController_1.postValoracionActivo);
router.put('/', valoracionActivoController_1.putValoracionActivo);
router.delete('/', valoracionActivoController_1.deleteValoracionActivo);
exports.default = router;
//# sourceMappingURL=valoracionActivosRouter.js.map