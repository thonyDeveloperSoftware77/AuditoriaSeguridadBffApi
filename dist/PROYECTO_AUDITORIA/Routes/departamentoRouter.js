"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoController_1 = require("../Controllers/departamentoController");
const router = (0, express_1.Router)();
router.get('/', departamentoController_1.getDepartamento);
router.post('/', departamentoController_1.postDepartamento);
router.put('/', departamentoController_1.putDepartamento);
router.delete('/', departamentoController_1.deleteDepartamento);
exports.default = router;
//# sourceMappingURL=departamentoRouter.js.map