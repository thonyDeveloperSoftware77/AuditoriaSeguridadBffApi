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
exports.deleteValoracionActivo = exports.putValoracionActivo = exports.postValoracionActivo = exports.getValoracionActivos = void 0;
const express_1 = require("express");
const ValoracionActivoModelo_1 = require("../../MODELO/ModeloSalida/ValoracionActivoModelo");
const valoracionActivoHandler_1 = require("../../APLICACION/Handlers/valoracionActivoHandler");
const getValoracionActivos = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const gruposSalida = yield (0, valoracionActivoHandler_1.valoracionActivoGetHandler)(body.id);
        res.status(200).json(gruposSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getValoracionActivos = getValoracionActivos;
const postValoracionActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new ValoracionActivoModelo_1.ValoracionActivoModelo();
        grupoEntrada.id_asset = body.id_asset;
        grupoEntrada.confidencialidad = body.confidencialidad;
        grupoEntrada.integridad = body.integridad;
        grupoEntrada.disponibilidad = body.disponibilidad;
        const grupoSalida = yield (0, valoracionActivoHandler_1.valoracionActivoPostHandler)(grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postValoracionActivo = postValoracionActivo;
const putValoracionActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new ValoracionActivoModelo_1.ValoracionActivoModelo();
        grupoEntrada.id_asset = body.id_asset;
        grupoEntrada.confidencialidad = body.confidencialidad;
        grupoEntrada.integridad = body.integridad;
        grupoEntrada.disponibilidad = body.disponibilidad;
        const grupoSalida = yield (0, valoracionActivoHandler_1.valoracionActivoPutHandler)(body.id, grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putValoracionActivo = putValoracionActivo;
const deleteValoracionActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoSalida = yield (0, valoracionActivoHandler_1.valoracionActivoDeleteHandler)(body.id);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteValoracionActivo = deleteValoracionActivo;
//# sourceMappingURL=valoracionActivoController.js.map