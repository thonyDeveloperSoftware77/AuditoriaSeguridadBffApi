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
exports.criticidadDeleteHandler = exports.criticidadPutHandler = exports.criticidadPostHandler = exports.criticidadGetHandler = void 0;
const CriticidadEntidad_1 = require("../../MODELO/ModeloEntrada/CriticidadEntidad");
const CriticidadModelo_1 = require("../../MODELO/ModeloSalida/CriticidadModelo");
const CriticidadRepositorio_1 = require("../../SERVICIO/Repositorio/CriticidadRepositorio");
const criticidadGetHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const criticidadesSalida = [];
    const criticidades = yield new CriticidadRepositorio_1.CriticidadRepositorio().obtenerCriticidad();
    criticidades.forEach((criticidad) => {
        const criticidadSalida = new CriticidadModelo_1.CriticidadModelo();
        criticidadSalida.id = criticidad.cri_id_criticality;
        criticidadSalida.criterio = criticidad.cri_criterio;
        criticidadSalida.valor = criticidad.cri_value;
        criticidadesSalida.push(criticidadSalida);
    });
    return criticidadesSalida;
});
exports.criticidadGetHandler = criticidadGetHandler;
const criticidadPostHandler = (criticidad) => __awaiter(void 0, void 0, void 0, function* () {
    const criticidadEntrada = new CriticidadEntidad_1.CriticidadEntidad();
    const criticidadSalida = new CriticidadModelo_1.CriticidadModelo();
    criticidadEntrada.cri_criterio = criticidad.criterio;
    criticidadEntrada.cri_value = criticidad.valor;
    yield new CriticidadRepositorio_1.CriticidadRepositorio().crearCriticidad(criticidadEntrada);
    criticidadSalida.criterio = criticidadEntrada.cri_criterio;
    criticidadSalida.valor = criticidadEntrada.cri_value;
    return criticidadSalida;
});
exports.criticidadPostHandler = criticidadPostHandler;
const criticidadPutHandler = (id, criticidad) => __awaiter(void 0, void 0, void 0, function* () {
    const criticidadEntrada = new CriticidadEntidad_1.CriticidadEntidad();
    criticidadEntrada.cri_criterio = criticidad.criterio;
    criticidadEntrada.cri_value = criticidad.valor;
    const criticidadActualizada = yield new CriticidadRepositorio_1.CriticidadRepositorio().actualizarCriticidad(id, criticidadEntrada);
    return criticidadActualizada;
});
exports.criticidadPutHandler = criticidadPutHandler;
const criticidadDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const criticidadEliminada = yield new CriticidadRepositorio_1.CriticidadRepositorio().eliminarCriticidad(id);
    return criticidadEliminada;
});
exports.criticidadDeleteHandler = criticidadDeleteHandler;
//# sourceMappingURL=criticidadHandler.js.map