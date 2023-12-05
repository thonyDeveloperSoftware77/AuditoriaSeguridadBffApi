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
const ActivoReviewerGrupoEntidad_1 = require("../../MODELO/ModeloEntrada/ActivoReviewerGrupoEntidad");
const ActivoReviewerGrupoModelo_1 = require("../../MODELO/ModeloSalida/ActivoReviewerGrupoModelo");
const ActivoReviewerGrupoRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoReviewerGrupoRepositorio");
const departamentoGrupoPostHandler = (departamento) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEntrada = new ActivoReviewerGrupoEntidad_1.ActivoReviewerGrupoEntidad();
    const departamentoSalida = new ActivoReviewerGrupoModelo_1.ActivoReviewerGrupoModelo();
    departamentoEntrada.ast_id_asset = departamento.idActivo;
    departamentoEntrada.gr_id_groups = departamento.idGrupo;
    yield new ActivoReviewerGrupoRepositorio_1.ActivoReviewerGrupoRepositorio().crearActivoReviewerGrupo(departamentoEntrada);
    departamentoSalida.idActivo = departamentoEntrada.ast_id_asset;
    departamentoSalida.idGrupo = departamentoEntrada.gr_id_groups;
    return departamentoSalida;
});
exports.departamentoGrupoPostHandler = departamentoGrupoPostHandler;
const departamentoGrupoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEliminada = yield new ActivoReviewerGrupoRepositorio_1.ActivoReviewerGrupoRepositorio().eliminarActivoReviewerGrupo(id);
    return departamentoEliminada;
});
exports.departamentoGrupoDeleteHandler = departamentoGrupoDeleteHandler;
//# sourceMappingURL=activoReviewerGrupoHandler.js.map