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
exports.deleteActivoReviewerUsuario = exports.postActivoReviewerUsuario = void 0;
const express_1 = require("express");
const ActivoReviewerUsuarioModelo_1 = require("../../MODELO/ModeloSalida/ActivoReviewerUsuarioModelo");
const activoReviewerUsuarioHandler_1 = require("../../APLICACION/Handlers/activoReviewerUsuarioHandler");
const postActivoReviewerUsuario = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new ActivoReviewerUsuarioModelo_1.ActivoReviewerUsuarioModelo();
        organizacionEntrada.idUsuario = body.idUsuario;
        organizacionEntrada.idActivo = body.idActivo;
        const organizacionSalida = yield (0, activoReviewerUsuarioHandler_1.departamentoUsuarioPostHandler)(organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postActivoReviewerUsuario = postActivoReviewerUsuario;
const deleteActivoReviewerUsuario = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionSalida = yield (0, activoReviewerUsuarioHandler_1.departamentoUsuarioDeleteHandler)(body.id);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteActivoReviewerUsuario = deleteActivoReviewerUsuario;
//# sourceMappingURL=activoReviewerUsuarioController.js.map