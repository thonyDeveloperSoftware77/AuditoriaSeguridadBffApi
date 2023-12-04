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
exports.deleteCriticidad = exports.putCriticidad = exports.postCriticidad = exports.getCriticidad = void 0;
const express_1 = require("express");
const CriticidadModelo_1 = require("../../MODELO/ModeloSalida/CriticidadModelo");
const criticidadHandler_1 = require("../../APLICACION/Handlers/criticidadHandler");
const getCriticidad = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizacionesSalida = yield (0, criticidadHandler_1.criticidadGetHandler)();
        res.status(200).json(organizacionesSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getCriticidad = getCriticidad;
const postCriticidad = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new CriticidadModelo_1.CriticidadModelo();
        organizacionEntrada.valor = body.valor;
        organizacionEntrada.criterio = body.criterio;
        const organizacionSalida = yield (0, criticidadHandler_1.criticidadPostHandler)(organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postCriticidad = postCriticidad;
const putCriticidad = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new CriticidadModelo_1.CriticidadModelo();
        organizacionEntrada.valor = body.valor;
        organizacionEntrada.criterio = body.criterio;
        const organizacionSalida = yield (0, criticidadHandler_1.criticidadPutHandler)(body.id, organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putCriticidad = putCriticidad;
const deleteCriticidad = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionSalida = yield (0, criticidadHandler_1.criticidadDeleteHandler)(body.id);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteCriticidad = deleteCriticidad;
//# sourceMappingURL=criticidadController.js.map