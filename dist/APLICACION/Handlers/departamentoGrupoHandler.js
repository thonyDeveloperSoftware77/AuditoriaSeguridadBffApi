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
exports.departamentoGrupoDeleteHandler = exports.departamentoGrupoPostHandler = void 0;
const DepartamentoGrupoEntidad_1 = require("../../MODELO/ModeloEntrada/DepartamentoGrupoEntidad");
const DepartamentoGrupoModelo_1 = require("../../MODELO/ModeloSalida/DepartamentoGrupoModelo");
const DepartamentoGrupoRepositorio_1 = require("../../SERVICIO/Repositorio/DepartamentoGrupoRepositorio");
const departamentoGrupoPostHandler = (departamento) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEntrada = new DepartamentoGrupoEntidad_1.DepartamentoGrupoEntidad();
    const departamentoSalida = new DepartamentoGrupoModelo_1.DepartamentoGrupoModelo();
    departamentoEntrada.bu_id_business_unit = departamento.idDepartamento;
    departamentoEntrada.gr_id_groups = departamento.id;
    yield new DepartamentoGrupoRepositorio_1.DepartamentoGrupoRepositorio().crearDepartamentoGrupo(departamentoEntrada);
    departamentoSalida.idDepartamento = departamentoEntrada.bu_id_business_unit;
    departamentoSalida.id = departamentoEntrada.gr_id_groups;
    return departamentoSalida;
});
exports.departamentoGrupoPostHandler = departamentoGrupoPostHandler;
const departamentoGrupoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEliminada = yield new DepartamentoGrupoRepositorio_1.DepartamentoGrupoRepositorio().eliminarDepartamentoGrupo(id);
    return departamentoEliminada;
});
exports.departamentoGrupoDeleteHandler = departamentoGrupoDeleteHandler;
//# sourceMappingURL=departamentoGrupoHandler.js.map