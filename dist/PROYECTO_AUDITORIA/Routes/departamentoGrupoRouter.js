"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoGrupoController_1 = require("../Controllers/departamentoGrupoController");
const router = (0, express_1.Router)();
router.post('/', departamentoGrupoController_1.postDepartamentoGrupo);
router.delete('/', departamentoGrupoController_1.deleteDepartamentoGrupo);
exports.default = router;
//# sourceMappingURL=departamentoGrupoRouter.js.map