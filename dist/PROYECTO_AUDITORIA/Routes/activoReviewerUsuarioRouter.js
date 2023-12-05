"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activoReviewerUsuarioController_1 = require("../Controllers/activoReviewerUsuarioController");
const router = (0, express_1.Router)();
router.post('/', activoReviewerUsuarioController_1.postActivoReviewerUsuario);
router.delete('/', activoReviewerUsuarioController_1.deleteActivoReviewerUsuario);
exports.default = router;
//# sourceMappingURL=activoReviewerUsuarioRouter.js.map