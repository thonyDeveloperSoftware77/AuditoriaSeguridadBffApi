"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activoBusinessUnitController_1 = require("../Controllers/activoBusinessUnitController");
const router = (0, express_1.Router)();
router.post('/', activoBusinessUnitController_1.postActivoBusinessUnit);
router.delete('/', activoBusinessUnitController_1.deleteActivoBusinessUnit);
exports.default = router;
//# sourceMappingURL=activoBusinessUnitRouter.js.map