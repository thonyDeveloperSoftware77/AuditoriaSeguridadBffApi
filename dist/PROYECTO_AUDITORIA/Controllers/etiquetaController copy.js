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
exports.deleteEtiqueta = exports.putEtiqueta = exports.postEtiqueta = exports.getEtiquetas = void 0;
const express_1 = require("express");
const EtiquetaModelo_1 = require("../../MODELO/ModeloSalida/EtiquetaModelo");
const etiquetaHandler_1 = require("../../APLICACION/Handlers/etiquetaHandler");
const getEtiquetas = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizacionesSalida = yield (0, etiquetaHandler_1.etiquetaGetHandler)();
        res.status(200).json(organizacionesSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getEtiquetas = getEtiquetas;
const postEtiqueta = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new EtiquetaModelo_1.EtiquetaModelo();
        organizacionEntrada.nombre = body.name;
        organizacionEntrada.descripcion = body.description;
        const organizacionSalida = yield (0, etiquetaHandler_1.etiquetaPostHandler)(organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postEtiqueta = postEtiqueta;
const putEtiqueta = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new EtiquetaModelo_1.EtiquetaModelo();
        organizacionEntrada.nombre = body.nombre;
        organizacionEntrada.descripcion = body.descripcion;
        const organizacionSalida = yield (0, etiquetaHandler_1.etiquetaPutHandler)(body.id, organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putEtiqueta = putEtiqueta;
const deleteEtiqueta = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionSalida = yield (0, etiquetaHandler_1.etiquetaDeleteHandler)(body.id);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteEtiqueta = deleteEtiqueta;
//# sourceMappingURL=etiquetaController%20copy.js.map