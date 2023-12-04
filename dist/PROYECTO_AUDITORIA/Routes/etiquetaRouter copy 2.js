"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const etiquetaController_1 = require("../Controllers/etiquetaController");
const router = (0, express_1.Router)();
router.get('/', etiquetaController_1.getEtiquetas);
router.post('/', etiquetaController_1.postEtiqueta);
router.put('/', etiquetaController_1.putEtiqueta);
router.delete('/', etiquetaController_1.deleteEtiqueta);
exports.default = router;
//# sourceMappingURL=etiquetaRouter%20copy%202.js.map