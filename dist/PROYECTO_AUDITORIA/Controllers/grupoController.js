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
exports.deleteGrupo = exports.putGrupo = exports.postGrupo = exports.getGrupos = void 0;
const express_1 = require("express");
const GrupoModelo_1 = require("../../MODELO/ModeloSalida/GrupoModelo");
const grupoHandler_1 = require("../../APLICACION/Handlers/grupoHandler");
const getGrupos = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const gruposSalida = yield (0, grupoHandler_1.grupoGetHandler)(body.id);
        res.status(200).json(gruposSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getGrupos = getGrupos;
const postGrupo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new GrupoModelo_1.GrupoModelo();
        grupoEntrada.nombre = body.nombre;
        grupoEntrada.idOrganizacion = body.idOrganizacion;
        grupoEntrada.rol = body.rol;
        const grupoSalida = yield (0, grupoHandler_1.grupoPostHandler)(grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postGrupo = postGrupo;
const putGrupo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoEntrada = new GrupoModelo_1.GrupoModelo();
        grupoEntrada.nombre = body.nombre;
        grupoEntrada.idOrganizacion = body.idOrganizacion;
        grupoEntrada.rol = body.rol;
        const grupoSalida = yield (0, grupoHandler_1.grupoPutHandler)(body.id, grupoEntrada);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putGrupo = putGrupo;
const deleteGrupo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const grupoSalida = yield (0, grupoHandler_1.grupoDeleteHandler)(body.id);
        res.status(200).json(grupoSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteGrupo = deleteGrupo;
//# sourceMappingURL=grupoController.js.map