"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriaController_1 = require("../Controllers/categoriaController");
const router = (0, express_1.Router)();
router.get('/', categoriaController_1.getCategorias);
router.post('/', categoriaController_1.postCategoria);
router.put('/', categoriaController_1.putCategoria);
router.delete('/', categoriaController_1.deleteCategoria);
exports.default = router;
//# sourceMappingURL=categoriaRouter.js.map