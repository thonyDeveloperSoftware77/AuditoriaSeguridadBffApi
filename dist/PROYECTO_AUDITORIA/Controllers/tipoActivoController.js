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
exports.deleteTipoActivo = exports.putTipoActivo = exports.postTipoActivo = exports.getTipoActivos = void 0;
const express_1 = require("express");
const TipoActivoModelo_1 = require("../../MODELO/ModeloSalida/TipoActivoModelo");
const tipoActivoHandler_1 = require("../../APLICACION/Handlers/tipoActivoHandler");
const getTipoActivos = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipoActivoSalida = yield (0, tipoActivoHandler_1.tipoActivoGetHandler)();
        res.status(200).json(tipoActivoSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getTipoActivos = getTipoActivos;
const postTipoActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const tipoActivoEntrada = new TipoActivoModelo_1.TipoActivoModelo();
        tipoActivoEntrada.nombre = body.nombre;
        tipoActivoEntrada.descripcion = body.descripcion;
        const tipoActivoSalida = yield (0, tipoActivoHandler_1.tipoActivoPostHandler)(tipoActivoEntrada);
        res.status(200).json(tipoActivoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postTipoActivo = postTipoActivo;
const putTipoActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const tipoActivoEntrada = new TipoActivoModelo_1.TipoActivoModelo();
        tipoActivoEntrada.nombre = body.nombre;
        tipoActivoEntrada.descripcion = body.descripcion;
        const tipoActivoSalida = yield (0, tipoActivoHandler_1.tipoActivoPutHandler)(body.id, tipoActivoEntrada);
        res.status(200).json(tipoActivoSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putTipoActivo = putTipoActivo;
const deleteTipoActivo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const tipoActivoSalida = yield (0, tipoActivoHandler_1.tipoActivoDeleteHandler)(body.id);
        res.status(200).json(tipoActivoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteTipoActivo = deleteTipoActivo;
//# sourceMappingURL=tipoActivoController.js.map