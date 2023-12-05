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
exports.deleteDepartamento = exports.putDepartamento = exports.postDepartamento = exports.getDepartamento = void 0;
const express_1 = require("express");
const DepartamentoModelo_1 = require("../../MODELO/ModeloSalida/DepartamentoModelo");
const departamentoHandler_1 = require("../../APLICACION/Handlers/departamentoHandler");
const getDepartamento = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const gruposSalida = yield (0, departamentoHandler_1.departamentoGetHandler)(body.id);
        res.status(200).json(gruposSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getDepartamento = getDepartamento;
const postDepartamento = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new DepartamentoModelo_1.DepartamentoModelo();
        grupoEntrada.nombre = body.nombre;
        grupoEntrada.descripcion = body.descripcion;
        grupoEntrada.idOrganizacion = body.idOrganizacion;
        const grupoSalida = yield (0, departamentoHandler_1.departamentoPostHandler)(grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postDepartamento = postDepartamento;
const putDepartamento = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new DepartamentoModelo_1.DepartamentoModelo();
        grupoEntrada.nombre = body.nombre;
        grupoEntrada.descripcion = body.descripcion;
        grupoEntrada.idOrganizacion = body.idOrganizacion;
        const grupoSalida = yield (0, departamentoHandler_1.departamentoPutHandler)(body.id, grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putDepartamento = putDepartamento;
const deleteDepartamento = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoSalida = yield (0, departamentoHandler_1.departamentoDeleteHandler)(body.id);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteDepartamento = deleteDepartamento;
//# sourceMappingURL=departamentoController%20copy.js.map