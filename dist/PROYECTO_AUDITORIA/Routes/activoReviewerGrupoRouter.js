"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activoReviewerGrupoController_1 = require("../Controllers/activoReviewerGrupoController");
const router = (0, express_1.Router)();
router.post('/', activoReviewerGrupoController_1.postActivoReviewerGrupo);
router.delete('/', activoReviewerGrupoController_1.deleteActivoReviewerGrupo);
exports.default = router;
//# sourceMappingURL=activoReviewerGrupoRouter.js.map