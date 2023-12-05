"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activoGrupoController_1 = require("../Controllers/activoGrupoController");
const router = (0, express_1.Router)();
router.post('/', activoGrupoController_1.postActivoGrupo);
router.delete('/', activoGrupoController_1.deleteActivoGrupo);
exports.default = router;
//# sourceMappingURL=activoGrupoRouter%20copy.js.map