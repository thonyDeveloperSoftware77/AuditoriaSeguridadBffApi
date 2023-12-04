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
exports.organizacionDeleteHandler = exports.organizacionPutHandler = exports.organizacionPostHandler = exports.organizacionGetHandler = void 0;
const OrganizacionEntidad_1 = require("../../MODELO/ModeloEntrada/OrganizacionEntidad");
const OrganizacionModelo_1 = require("../../MODELO/ModeloSalida/OrganizacionModelo");
const OrganizacionRepositorio_1 = require("../../SERVICIO/Repositorio/OrganizacionRepositorio");
const organizacionGetHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    const organizacionesSalida = [];
    const organizaciones = yield new OrganizacionRepositorio_1.OrganizacionRepositorio().obtenerOrganizaciones();
    organizaciones.forEach((organizacion) => {
        const organizacionSalida = new OrganizacionModelo_1.OrganizacionModelo();
        organizacionSalida.id = organizacion.org_id_organization;
        organizacionSalida.nombre = organizacion.org_name;
        organizacionSalida.sector = organizacion.org_sector;
        organizacionSalida.ubicacion = organizacion.org_ubication;
        organizacionSalida.actividadPrincipal = organizacion.org_main_activity;
        organizacionesSalida.push(organizacionSalida);
    });
    return organizacionesSalida;
});
exports.organizacionGetHandler = organizacionGetHandler;
const organizacionPostHandler = (organizacion) => __awaiter(void 0, void 0, void 0, function* () {
    const organizacionEntrada = new OrganizacionEntidad_1.OrganizacionEntidad();
    const organizacionSalida = new OrganizacionModelo_1.OrganizacionModelo();
    organizacionEntrada.org_name = organizacion.nombre;
    organizacionEntrada.org_sector = organizacion.sector;
    organizacionEntrada.org_ubication = organizacion.ubicacion;
    organizacionEntrada.org_main_activity = organizacion.actividadPrincipal;
    yield new OrganizacionRepositorio_1.OrganizacionRepositorio().crearOrganizacion(organizacionEntrada);
    organizacionSalida.nombre = organizacionEntrada.org_name;
    organizacionSalida.sector = organizacionEntrada.org_sector;
    organizacionSalida.ubicacion = organizacionEntrada.org_ubication;
    organizacionSalida.actividadPrincipal = organizacionEntrada.org_main_activity;
    return organizacionSalida;
});
exports.organizacionPostHandler = organizacionPostHandler;
const organizacionPutHandler = (id, organizacion) => __awaiter(void 0, void 0, void 0, function* () {
    const organizacionEntrada = new OrganizacionEntidad_1.OrganizacionEntidad();
    organizacionEntrada.org_name = organizacion.nombre;
    organizacionEntrada.org_sector = organizacion.sector;
    organizacionEntrada.org_ubication = organizacion.ubicacion;
    organizacionEntrada.org_main_activity = organizacion.actividadPrincipal;
    const organizacionActualizada = yield new OrganizacionRepositorio_1.OrganizacionRepositorio().actualizarOrganizacion(id, organizacionEntrada);
    return organizacionActualizada;
});
exports.organizacionPutHandler = organizacionPutHandler;
const organizacionDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const organizacionEliminada = yield new OrganizacionRepositorio_1.OrganizacionRepositorio().eliminarOrganizacion(id);
    return organizacionEliminada;
});
exports.organizacionDeleteHandler = organizacionDeleteHandler;
//# sourceMappingURL=organizacionHandler.js.map