"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activoUsuarioController_1 = require("../Controllers/activoUsuarioController");
const router = (0, express_1.Router)();
router.post('/', activoUsuarioController_1.postActivoUsuario);
router.delete('/', activoUsuarioController_1.deleteActivoUsuario);
exports.default = router;
//# sourceMappingURL=activoUsuarioRouter%20copy.js.map