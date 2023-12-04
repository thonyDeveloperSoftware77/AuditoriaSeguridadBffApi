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
exports.deleteOrganizacion = exports.putOrganizacion = exports.postOrganizacion = exports.getOrganizaciones = void 0;
const express_1 = require("express");
const OrganizacionModelo_1 = require("../../MODELO/ModeloSalida/OrganizacionModelo");
const organizacionHandler_1 = require("../../APLICACION/Handlers/organizacionHandler");
const getOrganizaciones = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizacionesSalida = yield (0, organizacionHandler_1.organizacionGetHandler)();
        res.status(200).json(organizacionesSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getOrganizaciones = getOrganizaciones;
const postOrganizacion = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new OrganizacionModelo_1.OrganizacionModelo();
        organizacionEntrada.nombre = body.nombre;
        organizacionEntrada.sector = body.sector;
        organizacionEntrada.ubicacion = body.ubicacion;
        organizacionEntrada.actividadPrincipal = body.actividadPrincipal;
        const organizacionSalida = yield (0, organizacionHandler_1.organizacionPostHandler)(organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postOrganizacion = postOrganizacion;
const putOrganizacion = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionEntrada = new OrganizacionModelo_1.OrganizacionModelo();
        organizacionEntrada.nombre = body.nombre;
        organizacionEntrada.sector = body.sector;
        organizacionEntrada.ubicacion = body.ubicacion;
        organizacionEntrada.actividadPrincipal = body.actividadPrincipal;
        const organizacionSalida = yield (0, organizacionHandler_1.organizacionPutHandler)(body.id, organizacionEntrada);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putOrganizacion = putOrganizacion;
const deleteOrganizacion = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const organizacionSalida = yield (0, organizacionHandler_1.organizacionDeleteHandler)(body.id);
        res.status(200).json(organizacionSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteOrganizacion = deleteOrganizacion;
//# sourceMappingURL=organizacionController.js.map