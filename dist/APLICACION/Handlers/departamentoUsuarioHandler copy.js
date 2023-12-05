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
exports.departamentoUsuarioDeleteHandler = exports.departamentoUsuarioPostHandler = void 0;
const DepartamentoUsuarioEntidad_1 = require("../../MODELO/ModeloEntrada/DepartamentoUsuarioEntidad");
const DepartamentoUsuarioModelo_1 = require("../../MODELO/ModeloSalida/DepartamentoUsuarioModelo");
const DepartamentoUsuarioRepositorio_1 = require("../../SERVICIO/Repositorio/DepartamentoUsuarioRepositorio");
const departamentoUsuarioPostHandler = (departamentoUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEntrada = new DepartamentoUsuarioEntidad_1.DepartamentoUsuarioEntidad();
    const departamentoUsuarioSalida = new DepartamentoUsuarioModelo_1.DepartamentoUsuarioModelo();
    departamentoUsuarioEntrada.bu_id_business_unit = departamentoUsuario.idDepartamento;
    departamentoUsuarioEntrada.usr_id_user = departamentoUsuario.id;
    yield new DepartamentoUsuarioRepositorio_1.DepartamentoUsuarioRepositorio().crearDepartamentoUsuario(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.idDepartamento = departamentoUsuarioEntrada.bu_id_business_unit;
    departamentoUsuarioSalida.id = departamentoUsuarioEntrada.usr_id_user;
    return departamentoUsuarioSalida;
});
exports.departamentoUsuarioPostHandler = departamentoUsuarioPostHandler;
const departamentoUsuarioDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEliminada = yield new DepartamentoUsuarioRepositorio_1.DepartamentoUsuarioRepositorio().eliminarDepartamentoUsuario(id);
    return departamentoUsuarioEliminada;
});
exports.departamentoUsuarioDeleteHandler = departamentoUsuarioDeleteHandler;
//# sourceMappingURL=departamentoUsuarioHandler%20copy.js.map