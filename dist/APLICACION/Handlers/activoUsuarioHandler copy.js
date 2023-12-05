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
const ActivoUsuarioEntidad_1 = require("../../MODELO/ModeloEntrada/ActivoUsuarioEntidad");
const ActivoUsuarioModelo_1 = require("../../MODELO/ModeloSalida/ActivoUsuarioModelo");
const ActivoUsuarioRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoUsuarioRepositorio");
const departamentoUsuarioPostHandler = (departamentoUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEntrada = new ActivoUsuarioEntidad_1.ActivoUsuarioEntidad();
    const departamentoUsuarioSalida = new ActivoUsuarioModelo_1.ActivoUsuarioModelo();
    departamentoUsuarioEntrada.ast_id_asset = departamentoUsuario.ast_id_asset;
    departamentoUsuarioEntrada.usr_id_user = departamentoUsuario.usr_id_user;
    yield new ActivoUsuarioRepositorio_1.ActivoUsuarioRepositorio().crearActivoUsuario(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.ast_id_asset = departamentoUsuarioEntrada.ast_id_asset;
    departamentoUsuarioSalida.usr_id_user = departamentoUsuarioEntrada.usr_id_user;
    return departamentoUsuarioSalida;
});
exports.departamentoUsuarioPostHandler = departamentoUsuarioPostHandler;
const departamentoUsuarioDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEliminada = yield new ActivoUsuarioRepositorio_1.ActivoUsuarioRepositorio().eliminarActivoUsuario(id);
    return departamentoUsuarioEliminada;
});
exports.departamentoUsuarioDeleteHandler = departamentoUsuarioDeleteHandler;
//# sourceMappingURL=activoUsuarioHandler%20copy.js.map