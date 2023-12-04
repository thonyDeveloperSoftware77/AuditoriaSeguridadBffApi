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
exports.departamentoDeleteHandler = exports.departamentoPostHandler = void 0;
const DepartamentoUsuarioEntidad_1 = require("../../MODELO/ModeloEntrada/DepartamentoUsuarioEntidad");
const DepartamentoUsuarioModelo_1 = require("../../MODELO/ModeloSalida/DepartamentoUsuarioModelo");
const DepartamentoUsuarioRepositorio_1 = require("../../SERVICIO/Repositorio/DepartamentoUsuarioRepositorio");
const departamentoPostHandler = (departamento) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEntrada = new DepartamentoUsuarioEntidad_1.DepartamentoUsuarioEntidad();
    const departamentoSalida = new DepartamentoUsuarioModelo_1.DepartamentoUsuarioModelo();
    departamentoEntrada.bu_id_business_unit = departamento.idDepartamento;
    departamentoEntrada.usr_id_user = departamento.id;
    yield new DepartamentoUsuarioRepositorio_1.DepartamentoUsuarioRepositorio().crearDepartamentoUsuario(departamentoEntrada);
    departamentoSalida.idDepartamento = departamentoEntrada.bu_id_business_unit;
    departamentoSalida.id = departamentoEntrada.usr_id_user;
    return departamentoSalida;
});
exports.departamentoPostHandler = departamentoPostHandler;
const departamentoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoEliminada = yield new DepartamentoUsuarioRepositorio_1.DepartamentoUsuarioRepositorio().eliminarDepartamentoUsuario(id);
    return departamentoEliminada;
});
exports.departamentoDeleteHandler = departamentoDeleteHandler;
//# sourceMappingURL=departamentoUsuarioHandler%20copy.js.map