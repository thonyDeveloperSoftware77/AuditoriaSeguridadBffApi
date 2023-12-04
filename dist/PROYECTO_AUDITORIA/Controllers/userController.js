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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUsers = void 0;
const express_1 = require("express");
const UsersModelo_1 = require("../../MODELO/ModeloSalida/UsersModelo");
const usuarioHandler_1 = require("../../APLICACION/Handlers/usuarioHandler");
const getUsers = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const usersSalida = yield (0, usuarioHandler_1.usuarioGetHandler)(body.id);
        res.status(200).json(usersSalida);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getUsers = getUsers;
const postUser = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const userEntrada = new UsersModelo_1.UsersModelo();
        userEntrada.nombre = body.nombre;
        userEntrada.apellido = body.apellido;
        userEntrada.email = body.email;
        userEntrada.password = body.password;
        userEntrada.idGrupo = body.idGrupo;
        userEntrada.idOrganizacion = body.idOrganizacion;
        const userSalida = yield (0, usuarioHandler_1.usuarioPostHandler)(userEntrada);
        res.status(200).json(userSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.postUser = postUser;
const putUser = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const userEntrada = new UsersModelo_1.UsersModelo();
        userEntrada.nombre = body.nombre;
        userEntrada.apellido = body.apellido;
        userEntrada.email = body.email;
        userEntrada.password = body.password;
        userEntrada.idGrupo = body.idGrupo;
        userEntrada.idOrganizacion = body.idOrganizacion;
        const userSalida = yield (0, usuarioHandler_1.usuarioPutHandler)(body.id, userEntrada);
        res.status(200).json(userSalida);
    }
    catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
});
exports.putUser = putUser;
const deleteUser = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const userSalida = yield (0, usuarioHandler_1.usuarioDeleteHandler)(body.id);
        res.status(200).json(userSalida);
    }
    catch (error) {
        console.log("error");
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map