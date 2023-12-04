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
exports.getOrganizaciones = void 0;
const express_1 = require("express");
const OrganizacionRepositorio_1 = require("../../SERVICIO/Repositorio/OrganizacionRepositorio");
const OrganizacionModelo_1 = require("../../MODELO/ModeloSalida/OrganizacionModelo");
const getOrganizaciones = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizacionesSalida = [];
        const organizaciones = yield new OrganizacionRepositorio_1.OrganizacionRepositorio().obtenerOrganizaciones();
        //transformar al modelo de salida
        organizaciones.forEach((organizacion) => {
            const organizacionSalida = new OrganizacionModelo_1.OrganizacionModelo();
            organizacionSalida.id = organizacion.org_id_organization;
            organizacionSalida.nombre = organizacion.org_name;
            organizacionSalida.sector = organizacion.org_sector;
            organizacionSalida.ubicacion = organizacion.org_ubication;
            organizacionSalida.actividadPrincipal = organizacion.org_main_activity;
            organizacionesSalida.push(organizacionSalida);
        });
        res.status(200).json(organizacionesSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getOrganizaciones = getOrganizaciones;
//# sourceMappingURL=organizacionController.js.map