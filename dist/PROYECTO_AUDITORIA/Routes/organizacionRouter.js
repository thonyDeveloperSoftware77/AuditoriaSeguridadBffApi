"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizacionController_1 = require("../Controllers/organizacionController");
const router = (0, express_1.Router)();
router.get('/', organizacionController_1.getOrganizaciones);
router.post('/', organizacionController_1.postOrganizacion);
router.put('/', organizacionController_1.putOrganizacion);
router.delete('/', organizacionController_1.deleteOrganizacion);
exports.default = router;
//# sourceMappingURL=organizacionRouter.js.map