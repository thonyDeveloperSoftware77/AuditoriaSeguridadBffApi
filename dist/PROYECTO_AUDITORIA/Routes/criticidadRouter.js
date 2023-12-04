"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const criticidadController_1 = require("../Controllers/criticidadController");
const router = (0, express_1.Router)();
router.get('/', criticidadController_1.getCriticidad);
router.post('/', criticidadController_1.postCriticidad);
router.put('/', criticidadController_1.putCriticidad);
router.delete('/', criticidadController_1.deleteCriticidad);
exports.default = router;
//# sourceMappingURL=criticidadRouter.js.map