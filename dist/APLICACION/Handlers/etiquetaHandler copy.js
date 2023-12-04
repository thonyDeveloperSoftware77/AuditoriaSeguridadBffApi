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
exports.etiquetaDeleteHandler = exports.etiquetaPutHandler = exports.etiquetaPostHandler = exports.etiquetaGetHandler = void 0;
const EtiquetaEntidad_1 = require("../../MODELO/ModeloEntrada/EtiquetaEntidad");
const EtiquetaModelo_1 = require("../../MODELO/ModeloSalida/EtiquetaModelo");
const EtiquetaRepositorio_1 = require("../../SERVICIO/Repositorio/EtiquetaRepositorio");
const etiquetaGetHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const etiquetaesSalida = [];
    const etiquetaes = yield new EtiquetaRepositorio_1.EtiquetaRepositorio().obtenerEtiquetas();
    etiquetaes.forEach((etiqueta) => {
        const etiquetaSalida = new EtiquetaModelo_1.EtiquetaModelo();
        etiquetaSalida.id = etiqueta.lbl_id_labels;
        etiquetaSalida.nombre = etiqueta.lbl_name;
        etiquetaSalida.descripcion = etiqueta.lbl_description;
        etiquetaesSalida.push(etiquetaSalida);
    });
    return etiquetaesSalida;
});
exports.etiquetaGetHandler = etiquetaGetHandler;
const etiquetaPostHandler = (etiqueta) => __awaiter(void 0, void 0, void 0, function* () {
    const etiquetaEntrada = new EtiquetaEntidad_1.EtiquetaEntidad();
    const etiquetaSalida = new EtiquetaModelo_1.EtiquetaModelo();
    etiquetaEntrada.lbl_name = etiqueta.nombre;
    etiquetaEntrada.lbl_description = etiqueta.descripcion;
    yield new EtiquetaRepositorio_1.EtiquetaRepositorio().crearEtiqueta(etiquetaEntrada);
    etiquetaSalida.nombre = etiquetaEntrada.lbl_name;
    etiquetaSalida.descripcion = etiquetaEntrada.lbl_description;
    return etiquetaSalida;
});
exports.etiquetaPostHandler = etiquetaPostHandler;
const etiquetaPutHandler = (id, etiqueta) => __awaiter(void 0, void 0, void 0, function* () {
    const etiquetaEntrada = new EtiquetaEntidad_1.EtiquetaEntidad();
    etiquetaEntrada.lbl_name = etiqueta.nombre;
    etiquetaEntrada.lbl_description = etiqueta.descripcion;
    const etiquetaActualizada = yield new EtiquetaRepositorio_1.EtiquetaRepositorio().actualizarEtiqueta(id, etiquetaEntrada);
    return etiquetaActualizada;
});
exports.etiquetaPutHandler = etiquetaPutHandler;
const etiquetaDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const etiquetaEliminada = yield new EtiquetaRepositorio_1.EtiquetaRepositorio().eliminarEtiqueta(id);
    return etiquetaEliminada;
});
exports.etiquetaDeleteHandler = etiquetaDeleteHandler;
//# sourceMappingURL=etiquetaHandler%20copy.js.map