"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizacionController_1 = require("../Controllers/organizacionController");
const router = (0, express_1.Router)();
router.get('/', organizacionController_1.getOrganizaciones);
exports.default = router;
//# sourceMappingURL=organizacionRouter.js.map