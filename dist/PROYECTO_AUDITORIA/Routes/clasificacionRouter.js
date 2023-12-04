"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clasificacionController_1 = require("../Controllers/clasificacionController");
const router = (0, express_1.Router)();
router.get('/', clasificacionController_1.getClasificaciones);
router.post('/', clasificacionController_1.postClasificacion);
router.put('/', clasificacionController_1.putClasificacion);
router.delete('/', clasificacionController_1.deleteClasificacion);
exports.default = router;
//# sourceMappingURL=clasificacionRouter.js.map