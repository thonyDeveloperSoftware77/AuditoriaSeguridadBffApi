"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupoController_1 = require("../Controllers/grupoController");
const router = (0, express_1.Router)();
router.post('/org', grupoController_1.getGrupos);
router.post('/', grupoController_1.postGrupo);
router.put('/', grupoController_1.putGrupo);
router.delete('/', grupoController_1.deleteGrupo);
exports.default = router;
//# sourceMappingURL=grupoRouter.js.map