"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoActivoController_1 = require("../Controllers/tipoActivoController");
const router = (0, express_1.Router)();
router.get('/', tipoActivoController_1.getTipoActivos);
router.post('/', tipoActivoController_1.postTipoActivo);
router.put('/', tipoActivoController_1.putTipoActivo);
router.delete('/', tipoActivoController_1.deleteTipoActivo);
exports.default = router;
//# sourceMappingURL=tipoActivoRouter.js.map