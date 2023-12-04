"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../Controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getUsers);
router.post('/', userController_1.postUser);
router.put('/', userController_1.putUser);
router.delete('/', userController_1.deleteUser);
exports.default = router;
//# sourceMappingURL=userRouter.js.map