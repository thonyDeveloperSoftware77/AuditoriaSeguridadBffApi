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
exports.deleteDepartamentoGrupo = exports.postDepartamentoGrupo = void 0;
const express_1 = require("express");
const DepartamentoGrupoModelo_1 = require("../../MODELO/ModeloSalida/DepartamentoGrupoModelo");
const departamentoGrupoHandler_1 = require("../../APLICACION/Handlers/departamentoGrupoHandler");
const postDepartamentoGrupo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new DepartamentoGrupoModelo_1.DepartamentoGrupoModelo();
        organizacionEntrada.idDepartamento = body.idGrupo;
        organizacionEntrada.id = body.idDepartamento;
        const organizacionSalida = yield (0, departamentoGrupoHandler_1.departamentoGrupoPostHandler)(organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postDepartamentoGrupo = postDepartamentoGrupo;
const deleteDepartamentoGrupo = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionSalida = yield (0, departamentoGrupoHandler_1.departamentoGrupoDeleteHandler)(body.id);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteDepartamentoGrupo = deleteDepartamentoGrupo;
//# sourceMappingURL=departamentoGrupoController.js.map