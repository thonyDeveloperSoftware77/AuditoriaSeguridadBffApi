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
exports.departamentoDeleteHandler = exports.departamentoPutHandler = exports.departamentoPostHandler = exports.departamentoGetHandler = void 0;
const ActivoEntidad_1 = require("../../MODELO/ModeloEntrada/ActivoEntidad");
const ActivoModelo_1 = require("../../MODELO/ModeloSalida/ActivoModelo");
const ActivoGrupoRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoGrupoRepositorio");
const ActivoRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoRepositorio");
const ActivoUsuarioRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoUsuarioRepositorio");
const ActivoReviewerGrupoRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoReviewerGrupoRepositorio");
const ActivoReviewerUsuarioRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoReviewerUsuarioRepositorio");
const ActivoBusinessUnitRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoBusinessUnitRepositorio");
const departamentoGetHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoesSalida = [];
    const departamentos = yield new ActivoRepositorio_1.ActivoRepositorio().obtenerActivo(id);
    const grupos = yield new ActivoGrupoRepositorio_1.ActivoGrupoRepositorio().obtenerActivoGrupo(id);
    const usuarios = yield new ActivoUsuarioRepositorio_1.ActivoUsuarioRepositorio().obtenerActivoUsuario(id);
    const gruposReviewer = yield new ActivoReviewerGrupoRepositorio_1.ActivoReviewerGrupoRepositorio().obtenerActivoReviewerGrupo(id);
    const usuariosReviewer = yield new ActivoReviewerUsuarioRepositorio_1.ActivoReviewerUsuarioRepositorio().obtenerActivoReviewerUsuario(id);
    const businessUnit = yield new ActivoBusinessUnitRepositorio_1.ActivoBusinessUnitRepositorio().obtenerActivoBusinessUnit(id);
    departamentos.forEach((departamento) => {
        const departamentoSalida = new ActivoModelo_1.ActivoModelo();
        const grupo = grupos.filter((grupo) => grupo.ast_id_asset === departamento.ast_id_asset);
        const usuario = usuarios.filter((usuario) => usuario.ast_id_asset === departamento.ast_id_asset);
        const grupoReviewer = gruposReviewer.filter((grupo) => grupo.ast_id_asset === departamento.ast_id_asset);
        const usuarioReviewer = usuariosReviewer.filter((usuario) => usuario.ast_id_asset === departamento.ast_id_asset);
        const businesUnit = businessUnit.filter((bu) => bu.ast_id_asset === departamento.ast_id_asset);
        departamentoSalida.id = departamento.ast_id_asset;
        departamentoSalida.id_organization = departamento.asst_id_organization;
        departamentoSalida.code = departamento.ast_code;
        departamentoSalida.name = departamento.ast_name;
        departamentoSalida.description = departamento.ast_description;
        departamentoSalida.ubication = departamento.ast_ubication;
        departamentoSalida.label = departamento.lbl_name;
        departamentoSalida.type = departamento.a_type_name;
        departamentoSalida.criticality = departamento.cri_value;
        departamentoSalida.category = departamento.ctg_name;
        departamentoSalida.class = departamento.clas_name;
        departamentoSalida.review_date = departamento.ast_review_date;
        departamentoSalida.ast_grupos = grupo;
        departamentoSalida.ast_usuarios = usuario;
        departamentoSalida.ast_reviewer_grupos = grupoReviewer;
        departamentoSalida.asst_reviewer_usuarios = usuarioReviewer;
        departamentoSalida.ast_business_unit = businesUnit;
        departamentoesSalida.push(departamentoSalida);
    });
    return departamentoesSalida;
});
exports.departamentoGetHandler = departamentoGetHandler;
const departamentoPostHandler = (departamento) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEntrada = new ActivoEntidad_1.ActivoEntidad();
    const departamentoSalida = new ActivoModelo_1.ActivoModelo();
    departamentoEntrada.ast_code = departamento.code;
    departamentoEntrada.ast_name = departamento.name;
    departamentoEntrada.ast_description = departamento.description;
    departamentoEntrada.ast_ubication = departamento.ubication;
    departamentoEntrada.lbl_name = departamento.label;
    departamentoEntrada.a_type_name = departamento.type;
    departamentoEntrada.cri_id_criteria = departamento.id_criterio;
    departamentoEntrada.ctg_id_category = departamento.id_categoria;
    departamentoEntrada.clas_id_class = departamento.id_clasificacion;
    departamentoEntrada.asst_id_organization = departamento.id_organization;
    departamentoEntrada.ast_review_date = departamento.review_date;
    const new_Id = yield new ActivoRepositorio_1.ActivoRepositorio().crearActivo(departamentoEntrada);
    departamentoSalida.new_id = new_Id[0].NewID;
    departamentoSalida.code = departamentoEntrada.ast_code;
    departamentoSalida.name = departamentoEntrada.ast_name;
    departamentoSalida.description = departamentoEntrada.ast_description;
    departamentoSalida.ubication = departamentoEntrada.ast_ubication;
    departamentoSalida.label = departamentoEntrada.lbl_name;
    departamentoSalida.type = departamentoEntrada.a_type_name;
    departamentoSalida.criticality = departamentoEntrada.cri_value;
    departamentoSalida.category = departamentoEntrada.ctg_name;
    departamentoSalida.class = departamentoEntrada.clas_name;
    departamentoSalida.id_organization = departamentoEntrada.asst_id_organization;
    departamentoSalida.review_date = departamentoEntrada.ast_review_date;
    return departamentoSalida;
});
exports.departamentoPostHandler = departamentoPostHandler;
const departamentoPutHandler = (id, departamento) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEntrada = new ActivoEntidad_1.ActivoEntidad();
    departamentoEntrada.ast_code = departamento.code;
    departamentoEntrada.ast_name = departamento.name;
    departamentoEntrada.ast_description = departamento.description;
    departamentoEntrada.ast_ubication = departamento.ubication;
    departamentoEntrada.lbl_name = departamento.label;
    departamentoEntrada.a_type_name = departamento.type;
    departamentoEntrada.cri_id_criteria = departamento.id_criterio;
    departamentoEntrada.ctg_id_category = departamento.id_categoria;
    departamentoEntrada.clas_id_class = departamento.id_clasificacion;
    departamentoEntrada.asst_id_organization = departamento.id_organization;
    departamentoEntrada.ast_review_date = departamento.review_date;
    const departamentoActualizada = yield new ActivoRepositorio_1.ActivoRepositorio().actualizarActivo(id, departamentoEntrada);
    return departamentoActualizada;
});
exports.departamentoPutHandler = departamentoPutHandler;
const departamentoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEliminada = yield new ActivoRepositorio_1.ActivoRepositorio().eliminarActivo(id);
    return departamentoEliminada;
});
exports.departamentoDeleteHandler = departamentoDeleteHandler;
//# sourceMappingURL=activoHandler.js.map