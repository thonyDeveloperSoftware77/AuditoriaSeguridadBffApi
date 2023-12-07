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
const ActivoBusinessUnitEntidad_1 = require("../../MODELO/ModeloEntrada/ActivoBusinessUnitEntidad");
const ActivoBusinessUnitModelo_1 = require("../../MODELO/ModeloSalida/ActivoBusinessUnitModelo");
const ActivoBusinessUnitRepositorio_1 = require("../../SERVICIO/Repositorio/ActivoBusinessUnitRepositorio");
const departamentoUsuarioPostHandler = (departamentoUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEntrada = new ActivoBusinessUnitEntidad_1.ActivoBusinessUnitEntidad();
    const departamentoUsuarioSalida = new ActivoBusinessUnitModelo_1.ActivoBusinessUnitModelo();
    departamentoUsuarioEntrada.ast_id_asset = departamentoUsuario.ast_id_asset;
    departamentoUsuarioEntrada.bu_id_business_unit = departamentoUsuario.bu_id_business_unit;
    departamentoUsuarioSalida.bu_name = departamentoUsuario.bu_name;
    yield new ActivoBusinessUnitRepositorio_1.ActivoBusinessUnitRepositorio().crearActivoBusinessUnit(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.ast_id_asset = departamentoUsuarioEntrada.ast_id_asset;
    departamentoUsuarioSalida.bu_id_business_unit = departamentoUsuarioEntrada.bu_id_business_unit;
    departamentoUsuarioSalida.abu_id = departamentoUsuarioEntrada.abu_id;
    return departamentoUsuarioSalida;
});
exports.departamentoUsuarioPostHandler = departamentoUsuarioPostHandler;
const departamentoUsuarioDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const departamentoUsuarioEliminada = yield new ActivoBusinessUnitRepositorio_1.ActivoBusinessUnitRepositorio().eliminarActivoBusinessUnit(id);
    return departamentoUsuarioEliminada;
});
exports.departamentoUsuarioDeleteHandler = departamentoUsuarioDeleteHandler;
//# sourceMappingURL=activoBusinessUnitHandler.js.map