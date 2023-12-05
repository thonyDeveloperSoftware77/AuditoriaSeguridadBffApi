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
exports.deleteActivo = exports.putActivo = exports.postActivo = exports.getActivo = void 0;
const express_1 = require("express");
const ActivoModelo_1 = require("../../MODELO/ModeloSalida/ActivoModelo");
const activoHandler_1 = require("../../APLICACION/Handlers/activoHandler");
const getActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const gruposSalida = yield (0, activoHandler_1.departamentoGetHandler)(body.id);
        res.status(200).json(gruposSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getActivo = getActivo;
const postActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new ActivoModelo_1.ActivoModelo();
        grupoEntrada.code = body.code;
        grupoEntrada.name = body.name;
        grupoEntrada.description = body.description;
        grupoEntrada.ubication = body.ubicacion;
        grupoEntrada.label = body.label;
        grupoEntrada.type = body.type;
        grupoEntrada.id_criterio = body.id_criterio;
        grupoEntrada.id_categoria = body.id_categoria;
        grupoEntrada.id_clasificacion = body.id_clasificacion;
        grupoEntrada.id_organization = body.id_organizacion;
        grupoEntrada.review_date = body.date;
        const grupoSalida = yield (0, activoHandler_1.departamentoPostHandler)(grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postActivo = postActivo;
const putActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new ActivoModelo_1.ActivoModelo();
        grupoEntrada.code = body.code;
        grupoEntrada.name = body.name;
        grupoEntrada.description = body.description;
        grupoEntrada.ubication = body.ubicacion;
        grupoEntrada.label = body.label;
        grupoEntrada.type = body.type;
        grupoEntrada.id_criterio = body.id_criterio;
        grupoEntrada.id_categoria = body.id_categoria;
        grupoEntrada.id_clasificacion = body.id_clasificacion;
        grupoEntrada.id_organization = body.id_organizacion;
        grupoEntrada.review_date = body.date;
        const grupoSalida = yield (0, activoHandler_1.departamentoPutHandler)(body.id, grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putActivo = putActivo;
const deleteActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoSalida = yield (0, activoHandler_1.departamentoDeleteHandler)(body.id);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteActivo = deleteActivo;
//# sourceMappingURL=activoController.js.map