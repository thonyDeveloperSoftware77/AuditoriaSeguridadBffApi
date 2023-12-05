"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departamentoUsuarioController_1 = require("../Controllers/departamentoUsuarioController");
const router = (0, express_1.Router)();
router.post('/', departamentoUsuarioController_1.postDepartamentoUsuario);
router.delete('/', departamentoUsuarioController_1.deleteDepartamentoUsuario);
exports.default = router;
//# sourceMappingURL=departamentoUsuarioRouter%20copy.js.map