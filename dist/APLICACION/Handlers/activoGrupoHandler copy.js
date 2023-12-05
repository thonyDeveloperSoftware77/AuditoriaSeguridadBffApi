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
const ActivoGrupoEntidad_1 = require("../../MODELO/ModeloEntrada/ActivoGrupoEntidad");
const ActivoGrupoModelo_1 = require("../../MODELO/ModeloSalida/ActivoGrupoModelo");
const ActivoGrupoRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoGrupoRepositorio");
const departamentoGrupoPostHandler = (departamento) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEntrada = new ActivoGrupoEntidad_1.ActivoGrupoEntidad();
    const departamentoSalida = new ActivoGrupoModelo_1.ActivoGrupoModelo();
    departamentoEntrada.ast_id_asset = departamento.idActivo;
    departamentoEntrada.gr_id_groups = departamento.idGrupo;
    yield new ActivoGrupoRepositorio_1.ActivoGrupoRepositorio().crearActivoGrupo(departamentoEntrada);
    departamentoSalida.idActivo = departamentoEntrada.ast_id_asset;
    departamentoSalida.idGrupo = departamentoEntrada.gr_id_groups;
    return departamentoSalida;
});
exports.departamentoGrupoPostHandler = departamentoGrupoPostHandler;
const departamentoGrupoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEliminada = yield new ActivoGrupoRepositorio_1.ActivoGrupoRepositorio().eliminarActivoGrupo(id);
    return departamentoEliminada;
});
exports.departamentoGrupoDeleteHandler = departamentoGrupoDeleteHandler;
//# sourceMappingURL=activoGrupoHandler%20copy.js.map