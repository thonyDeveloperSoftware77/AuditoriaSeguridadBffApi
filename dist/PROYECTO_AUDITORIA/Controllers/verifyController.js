"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerifys = void 0;
const express_1 = require("express");
const verifyHandler_1 = require("../../APLICACION/Handlers/verifyHandler");
const getVerifys = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const gruposSalida = yield (0, verifyHandler_1.VerifyGetHandler)(body.email, body.password);
        res.status(200).json(gruposSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getVerifys = getVerifys;
//# sourceMappingURL=verifyController.js.map