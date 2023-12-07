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
const DepartamentoEntidad_1 = require("../../MODELO/ModeloEntrada/DepartamentoEntidad");
const DepartamentoModelo_1 = require("../../MODELO/ModeloSalida/DepartamentoModelo");
const DepartamentoGrupoRepositorio_1 = require("../../SERVICIO/Repositorio/DepartamentoGrupoRepositorio");
const DepartamentoRepositorio_1 = require("../../SERVICIO/Repositorio/DepartamentoRepositorio");
const DepartamentoUsuarioRepositorio_1 = require("../../SERVICIO/Repositorio/DepartamentoUsuarioRepositorio");
const departamentoGetHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoesSalida = [];
    const departamentos = yield new DepartamentoRepositorio_1.DepartamentoRepositorio().obtenerDepartamento(id);
    const grupos = yield new DepartamentoGrupoRepositorio_1.DepartamentoGrupoRepositorio().obtenerDepartamentoGrupo(id);
    const usuarios = yield new DepartamentoUsuarioRepositorio_1.DepartamentoUsuarioRepositorio().obtenerDepartamentoUsuario(id);
    departamentos.forEach((departamento) => {
        const departamentoSalida = new DepartamentoModelo_1.DepartamentoModelo();
        const grupo = grupos.filter((grupo) => grupo.bu_id_business_unit === departamento.bu_id_business_unit);
        const usuario = usuarios.filter((usuario) => usuario.bu_id_business_unit === departamento.bu_id_business_unit);
        departamentoSalida.id = departamento.bu_id_business_unit;
        departamentoSalida.nombre = departamento.bu_name;
        departamentoSalida.descripcion = departamento.bu_description;
        departamentoSalida.idOrganizacion = departamento.bu_id_organization;
        departamentoSalida.grupos = grupo;
        departamentoSalida.usuarios = usuario;
        departamentoesSalida.push(departamentoSalida);
    });
    return departamentoesSalida;
});
exports.departamentoGetHandler = departamentoGetHandler;
const departamentoPostHandler = (departamento) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("departamento");
    const departamentoEntrada = new DepartamentoEntidad_1.DepartamentoEntidad();
    const departamentoSalida = new DepartamentoModelo_1.DepartamentoModelo();
    departamentoEntrada.bu_name = departamento.nombre;
    departamentoEntrada.bu_description = departamento.descripcion;
    departamentoEntrada.bu_id_organization = departamento.idOrganizacion;
    const new_Id = yield new DepartamentoRepositorio_1.DepartamentoRepositorio().crearDepartamento(departamentoEntrada);
    console.log(new_Id);
    departamentoSalida.new_id = new_Id[0].NewID;
    console.log(departamentoSalida.new_id);
    departamentoSalida.nombre = departamentoEntrada.bu_name;
    departamentoSalida.idOrganizacion = departamentoEntrada.bu_id_organization;
    return departamentoSalida;
});
exports.departamentoPostHandler = departamentoPostHandler;
const departamentoPutHandler = (id, departamento) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEntrada = new DepartamentoEntidad_1.DepartamentoEntidad();
    departamentoEntrada.bu_name = departamento.nombre;
    departamentoEntrada.bu_description = departamento.descripcion;
    departamentoEntrada.bu_id_organization = departamento.idOrganizacion;
    const departamentoActualizada = yield new DepartamentoRepositorio_1.DepartamentoRepositorio().actualizarDepartamento(id, departamentoEntrada);
    return departamentoActualizada;
});
exports.departamentoPutHandler = departamentoPutHandler;
const departamentoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEliminada = yield new DepartamentoRepositorio_1.DepartamentoRepositorio().eliminarDepartamento(id);
    return departamentoEliminada;
});
exports.departamentoDeleteHandler = departamentoDeleteHandler;
//# sourceMappingURL=departamentoHandler.js.map