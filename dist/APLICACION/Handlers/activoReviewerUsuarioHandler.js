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
const ActivoReviewerUsuarioEntidad_1 = require("../../MODELO/ModeloEntrada/ActivoReviewerUsuarioEntidad");
const ActivoReviewerUsuarioModelo_1 = require("../../MODELO/ModeloSalida/ActivoReviewerUsuarioModelo");
const ActivoReviewerUsuarioRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoReviewerUsuarioRepositorio");
const departamentoUsuarioPostHandler = (departamentoUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEntrada = new ActivoReviewerUsuarioEntidad_1.ActivoReviewerUsuarioEntidad();
    const departamentoUsuarioSalida = new ActivoReviewerUsuarioModelo_1.ActivoReviewerUsuarioModelo();
    departamentoUsuarioEntrada.ast_id_asset = departamentoUsuario.idActivo;
    departamentoUsuarioEntrada.usr_id_user = departamentoUsuario.idUsuario;
    yield new ActivoReviewerUsuarioRepositorio_1.ActivoReviewerUsuarioRepositorio().crearActivoReviewerUsuario(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.idActivo = departamentoUsuarioEntrada.ast_id_asset;
    departamentoUsuarioSalida.idUsuario = departamentoUsuarioEntrada.usr_id_user;
    return departamentoUsuarioSalida;
});
exports.departamentoUsuarioPostHandler = departamentoUsuarioPostHandler;
const departamentoUsuarioDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEliminada = yield new ActivoReviewerUsuarioRepositorio_1.ActivoReviewerUsuarioRepositorio().eliminarActivoReviewerUsuario(id);
    return departamentoUsuarioEliminada;
});
exports.departamentoUsuarioDeleteHandler = departamentoUsuarioDeleteHandler;
//# sourceMappingURL=activoReviewerUsuarioHandler.js.map