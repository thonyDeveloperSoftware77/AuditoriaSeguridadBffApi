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
exports.deleteActivoUsuario = exports.postActivoUsuario = void 0;
const express_1 = require("express");
const ActivoUsuarioModelo_1 = require("../../MODELO/ModeloSalida/ActivoUsuarioModelo");
const activoUsuarioHandler_1 = require("../../APLICACION/Handlers/activoUsuarioHandler");
const postActivoUsuario = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new ActivoUsuarioModelo_1.ActivoUsuarioModelo();
        organizacionEntrada.usr_id_user = body.idUsuario;
        organizacionEntrada.ast_id_asset = body.idActivo;
        const organizacionSalida = yield (0, activoUsuarioHandler_1.departamentoUsuarioPostHandler)(organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postActivoUsuario = postActivoUsuario;
const deleteActivoUsuario = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionSalida = yield (0, activoUsuarioHandler_1.departamentoUsuarioDeleteHandler)(body.id);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteActivoUsuario = deleteActivoUsuario;
//# sourceMappingURL=activoUsuarioController%20copy.js.map