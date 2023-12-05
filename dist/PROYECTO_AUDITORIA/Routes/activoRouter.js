"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activoController_1 = require("../Controllers/activoController");
const router = (0, express_1.Router)();
router.get('/', activoController_1.getActivo);
router.post('/', activoController_1.postActivo);
router.put('/', activoController_1.putActivo);
router.delete('/', activoController_1.deleteActivo);
exports.default = router;
//# sourceMappingURL=activoRouter.js.map