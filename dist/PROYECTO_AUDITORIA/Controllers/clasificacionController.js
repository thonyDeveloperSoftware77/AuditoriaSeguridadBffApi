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
exports.deleteClasificacion = exports.putClasificacion = exports.postClasificacion = exports.getClasificaciones = void 0;
const express_1 = require("express");
const ClasificacionModelo_1 = require("../../MODELO/ModeloSalida/ClasificacionModelo");
const clasificacionHandler_1 = require("../../APLICACION/Handlers/clasificacionHandler");
const getClasificaciones = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriaSalida = yield (0, clasificacionHandler_1.clasificacionGetHandler)();
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getClasificaciones = getClasificaciones;
const postClasificacion = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const categoriaEntrada = new ClasificacionModelo_1.ClasificacionModelo();
        categoriaEntrada.nombre = body.nombre;
        categoriaEntrada.definicion = body.definicion;
        categoriaEntrada.ejemplo = body.ejemplo;
        const categoriaSalida = yield (0, clasificacionHandler_1.clasificacionPostHandler)(categoriaEntrada);
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postClasificacion = postClasificacion;
const putClasificacion = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const categoriaEntrada = new ClasificacionModelo_1.ClasificacionModelo();
        categoriaEntrada.nombre = body.nombre;
        categoriaEntrada.definicion = body.definicion;
        categoriaEntrada.ejemplo = body.ejemplo;
        const categoriaSalida = yield (0, clasificacionHandler_1.clasificacionPutHandler)(body.id, categoriaEntrada);
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putClasificacion = putClasificacion;
const deleteClasificacion = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const categoriaSalida = yield (0, clasificacionHandler_1.clasificacionDeleteHandler)(body.id);
        res.status(200).json(categoriaSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteClasificacion = deleteClasificacion;
//# sourceMappingURL=clasificacionController.js.map