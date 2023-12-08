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
exports.valoracionActivoDeleteHandler = exports.valoracionActivoPutHandler = exports.valoracionActivoPostHandler = exports.valoracionActivoGetHandler = void 0;
const ValoracionActivoEntidad_1 = require("../../MODELO/ModeloEntrada/ValoracionActivoEntidad");
const ValoracionActivoModelo_1 = require("../../MODELO/ModeloSalida/ValoracionActivoModelo");
const ValoracionActivosRepositorio_1 = require("../../SERVICIO/Repositorio/ValoracionActivosRepositorio");
const valoracionActivoGetHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const valoracionActivoesSalida = [];
    const valoracionActivoes = yield new ValoracionActivosRepositorio_1.ValoracionActivosRepositorio().obtenerValoracionActivos(id);
    valoracionActivoes.forEach((valoracionActivo) => {
        const valoracionActivoSalida = new ValoracionActivoModelo_1.ValoracionActivoModelo();
        valoracionActivoSalida.id = valoracionActivo.id_valoracion;
        valoracionActivoSalida.id_asset = valoracionActivo.id_asset;
        valoracionActivoSalida.confidencialidad = valoracionActivo.confidencialidad;
        valoracionActivoSalida.integridad = valoracionActivo.integridad;
        valoracionActivoSalida.disponibilidad = valoracionActivo.disponibilidad;
        valoracionActivoSalida.codigo = valoracionActivo.codigo;
        valoracionActivoSalida.nombre = valoracionActivo.nombre;
        valoracionActivoSalida.descripcion = valoracionActivo.descripcion;
        valoracionActivoSalida.ubicacion = valoracionActivo.ubicacion;
        valoracionActivoSalida.idOrganizacion = valoracionActivo.idOrganizacion;
        valoracionActivoesSalida.push(valoracionActivoSalida);
    });
    return valoracionActivoesSalida;
});
exports.valoracionActivoGetHandler = valoracionActivoGetHandler;
const valoracionActivoPostHandler = (valoracionActivo) => __awaiter(void 0, void 0, void 0, function* () {
    const valoracionActivoEntrada = new ValoracionActivoEntidad_1.ValoracionActivoEntidad();
    const valoracionActivoSalida = new ValoracionActivoModelo_1.ValoracionActivoModelo();
    valoracionActivoEntrada.id_asset = valoracionActivo.id_asset;
    valoracionActivoEntrada.confidencialidad = valoracionActivo.confidencialidad;
    valoracionActivoEntrada.integridad = valoracionActivo.integridad;
    valoracionActivoEntrada.disponibilidad = valoracionActivo.disponibilidad;
    yield new ValoracionActivosRepositorio_1.ValoracionActivosRepositorio().crearValoracionActivo(valoracionActivoEntrada);
    valoracionActivoSalida.id_asset = valoracionActivoEntrada.id_asset;
    valoracionActivoSalida.confidencialidad = valoracionActivoEntrada.confidencialidad;
    valoracionActivoSalida.integridad = valoracionActivoEntrada.integridad;
    valoracionActivoSalida.disponibilidad = valoracionActivoEntrada.disponibilidad;
    return valoracionActivoSalida;
});
exports.valoracionActivoPostHandler = valoracionActivoPostHandler;
const valoracionActivoPutHandler = (id, valoracionActivo) => __awaiter(void 0, void 0, void 0, function* () {
    const valoracionActivoEntrada = new ValoracionActivoEntidad_1.ValoracionActivoEntidad();
    valoracionActivoEntrada.id_asset = valoracionActivo.id_asset;
    valoracionActivoEntrada.confidencialidad = valoracionActivo.confidencialidad;
    valoracionActivoEntrada.integridad = valoracionActivo.integridad;
    valoracionActivoEntrada.disponibilidad = valoracionActivo.disponibilidad;
    const valoracionActivoActualizada = yield new ValoracionActivosRepositorio_1.ValoracionActivosRepositorio().actualizarValoracionActivo(id, valoracionActivoEntrada);
    return valoracionActivoActualizada;
});
exports.valoracionActivoPutHandler = valoracionActivoPutHandler;
const valoracionActivoDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const valoracionActivoEliminada = yield new ValoracionActivosRepositorio_1.ValoracionActivosRepositorio().eliminarValoracionActivo(id);
    return valoracionActivoEliminada;
});
exports.valoracionActivoDeleteHandler = valoracionActivoDeleteHandler;
//# sourceMappingURL=valoracionActivoHandler.js.map