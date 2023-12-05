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
exports.tipoActivoDeleteHandler = exports.tipoActivoPutHandler = exports.tipoActivoPostHandler = exports.tipoActivoGetHandler = void 0;
const TipoActivoEntidad_1 = require("../../MODELO/ModeloEntrada/TipoActivoEntidad");
const TipoActivoModelo_1 = require("../../MODELO/ModeloSalida/TipoActivoModelo");
const TipoActivoRepositorio_1 = require("../../SERVICIO/Repositorio/TipoActivoRepositorio");
const tipoActivoGetHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const tipoActivoesSalida = [];
    const tipoActivoes = yield new TipoActivoRepositorio_1.TipoActivoRepositorio().obtenerTipoActivo();
    tipoActivoes.forEach((tipoActivo) => {
        const tipoActivoSalida = new TipoActivoModelo_1.TipoActivoModelo();
        tipoActivoSalida.id = tipoActivo.a_type_id_asset_type;
        tipoActivoSalida.nombre = tipoActivo.a_type_name;
        tipoActivoSalida.descripcion = tipoActivo.a_type_description;
        tipoActivoesSalida.push(tipoActivoSalida);
    });
    return tipoActivoesSalida;
});
exports.tipoActivoGetHandler = tipoActivoGetHandler;
const tipoActivoPostHandler = (tipoActivo) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoActivoEntrada = new TipoActivoEntidad_1.TipoActivoEntidad();
    const tipoActivoSalida = new TipoActivoModelo_1.TipoActivoModelo();
    tipoActivoEntrada.a_type_name = tipoActivo.nombre;
    tipoActivoEntrada.a_type_description = tipoActivo.descripcion;
    yield new TipoActivoRepositorio_1.TipoActivoRepositorio().crearTipoActivo(tipoActivoEntrada);
    tipoActivoSalida.nombre = tipoActivoEntrada.a_type_name;
    tipoActivoSalida.descripcion = tipoActivoEntrada.a_type_description;
    return tipoActivoSalida;
});
exports.tipoActivoPostHandler = tipoActivoPostHandler;
const tipoActivoPutHandler = (id, tipoActivo) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoActivoEntrada = new TipoActivoEntidad_1.TipoActivoEntidad();
    tipoActivoEntrada.a_type_name = tipoActivo.nombre;
    tipoActivoEntrada.a_type_description = tipoActivo.descripcion;
    const tipoActivoActualizada = yield new TipoActivoRepositorio_1.TipoActivoRepositorio().actualizarTipoActivo(id, tipoActivoEntrada);
    return tipoActivoActualizada;
});
exports.tipoActivoPutHandler = tipoActivoPutHandler;
const tipoActivoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoActivoEliminada = yield new TipoActivoRepositorio_1.TipoActivoRepositorio().eliminarTipoActivo(id);
    return tipoActivoEliminada;
});
exports.tipoActivoDeleteHandler = tipoActivoDeleteHandler;
//# sourceMappingURL=tipoActivoHandler.js.map