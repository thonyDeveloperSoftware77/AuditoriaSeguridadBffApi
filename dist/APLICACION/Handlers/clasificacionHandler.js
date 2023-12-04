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
exports.clasificacionDeleteHandler = exports.clasificacionPutHandler = exports.clasificacionPostHandler = exports.clasificacionGetHandler = void 0;
const ClasificacionEntidad_1 = require("../../MODELO/ModeloEntrada/ClasificacionEntidad");
const ClasificacionModelo_1 = require("../../MODELO/ModeloSalida/ClasificacionModelo");
const ClasificacionRepositorio_1 = require("../../SERVICIO/Repositorio/ClasificacionRepositorio");
const clasificacionGetHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const clasificacionesSalida = [];
    const clasificaciones = yield new ClasificacionRepositorio_1.ClasificacionRepositorio().obtenerClasificaciones();
    clasificaciones.forEach((clasificacion) => {
        const clasificacionSalida = new ClasificacionModelo_1.ClasificacionModelo();
        clasificacionSalida.id = clasificacion.clas_id_classification;
        clasificacionSalida.nombre = clasificacion.clas_name;
        clasificacionSalida.definicion = clasificacion.clas_definition;
        clasificacionSalida.ejemplo = clasificacion.clas_example;
        clasificacionesSalida.push(clasificacionSalida);
    });
    return clasificacionesSalida;
});
exports.clasificacionGetHandler = clasificacionGetHandler;
const clasificacionPostHandler = (clasificacion) => __awaiter(void 0, void 0, void 0, function* () {
    const clasificacionEntrada = new ClasificacionEntidad_1.ClasificacionEntidad();
    const clasificacionSalida = new ClasificacionModelo_1.ClasificacionModelo();
    clasificacionEntrada.clas_name = clasificacion.nombre;
    clasificacionEntrada.clas_definition = clasificacion.definicion;
    clasificacionEntrada.clas_example = clasificacion.ejemplo;
    yield new ClasificacionRepositorio_1.ClasificacionRepositorio().crearClasificacion(clasificacionEntrada);
    clasificacionSalida.nombre = clasificacionEntrada.clas_name;
    clasificacionSalida.definicion = clasificacionEntrada.clas_definition;
    clasificacionSalida.ejemplo = clasificacionEntrada.clas_example;
    return clasificacionSalida;
});
exports.clasificacionPostHandler = clasificacionPostHandler;
const clasificacionPutHandler = (id, clasificacion) => __awaiter(void 0, void 0, void 0, function* () {
    const clasificacionEntrada = new ClasificacionEntidad_1.ClasificacionEntidad();
    clasificacionEntrada.clas_name = clasificacion.nombre;
    clasificacionEntrada.clas_definition = clasificacion.definicion;
    clasificacionEntrada.clas_example = clasificacion.ejemplo;
    const clasificacionActualizada = yield new ClasificacionRepositorio_1.ClasificacionRepositorio().actualizarClasificacion(id, clasificacionEntrada);
    return clasificacionActualizada;
});
exports.clasificacionPutHandler = clasificacionPutHandler;
const clasificacionDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const clasificacionEliminada = yield new ClasificacionRepositorio_1.ClasificacionRepositorio().eliminarClasificacion(id);
    return clasificacionEliminada;
});
exports.clasificacionDeleteHandler = clasificacionDeleteHandler;
//# sourceMappingURL=clasificacionHandler.js.map