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
exports.grupoDeleteHandler = exports.grupoPutHandler = exports.grupoPostHandler = exports.grupoGetHandler = void 0;
const GrupoEntidad_1 = require("../../MODELO/ModeloEntrada/GrupoEntidad");
const GrupoModelo_1 = require("../../MODELO/ModeloSalida/GrupoModelo");
const GrupoRepositorio_1 = require("../../SERVICIO/Repositorio/GrupoRepositorio");
const grupoGetHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const grupoesSalida = [];
    const grupoes = yield new GrupoRepositorio_1.GrupoRepositorio().obtenerGrupos(id);
    grupoes.forEach((grupo) => {
        const grupoSalida = new GrupoModelo_1.GrupoModelo();
        grupoSalida.id = grupo.gr_id_organization;
        grupoSalida.nombre = grupo.gr_name;
        grupoSalida.idOrganizacion = grupo.gr_id_organization;
        grupoesSalida.push(grupoSalida);
    });
    return grupoesSalida;
});
exports.grupoGetHandler = grupoGetHandler;
const grupoPostHandler = (grupo) => __awaiter(void 0, void 0, void 0, function* () {
    const grupoEntrada = new GrupoEntidad_1.GrupoEntidad();
    const grupoSalida = new GrupoModelo_1.GrupoModelo();
    grupoEntrada.gr_name = grupo.nombre;
    grupoEntrada.gr_id_organization = grupo.idOrganizacion;
    yield new GrupoRepositorio_1.GrupoRepositorio().crearGrupo(grupoEntrada);
    grupoSalida.nombre = grupoEntrada.gr_name;
    grupoSalida.idOrganizacion = grupoEntrada.gr_id_organization;
    return grupoSalida;
});
exports.grupoPostHandler = grupoPostHandler;
const grupoPutHandler = (id, grupo) => __awaiter(void 0, void 0, void 0, function* () {
    const grupoEntrada = new GrupoEntidad_1.GrupoEntidad();
    grupoEntrada.gr_name = grupo.nombre;
    grupoEntrada.gr_id_organization = grupo.idOrganizacion;
    const grupoActualizada = yield new GrupoRepositorio_1.GrupoRepositorio().actualizarGrupo(id, grupoEntrada);
    return grupoActualizada;
});
exports.grupoPutHandler = grupoPutHandler;
const grupoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const grupoEliminada = yield new GrupoRepositorio_1.GrupoRepositorio().eliminarGrupo(id);
    return grupoEliminada;
});
exports.grupoDeleteHandler = grupoDeleteHandler;
//# sourceMappingURL=grupoHandler.js.map