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
exports.usuarioDeleteHandler = exports.usuarioPutHandler = exports.usuarioPostHandler = exports.usuarioGetHandler = void 0;
const UsersEntidad_1 = require("../../MODELO/ModeloEntrada/UsersEntidad");
const UsersModelo_1 = require("../../MODELO/ModeloSalida/UsersModelo");
const UsersRepositorio_1 = require("../../SERVICIO/Repositorio/UsersRepositorio");
const usuarioGetHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const usuariosSalida = [];
    const usuarios = yield new UsersRepositorio_1.UserRepositorio().obtenerUsers(id);
    usuarios.forEach((usuario) => {
        const usuarioSalida = new UsersModelo_1.UsersModelo();
        usuarioSalida.id = usuario.usr_id_user;
        usuarioSalida.nombre = usuario.usr_name;
        usuarioSalida.apellido = usuario.usr_surname;
        usuarioSalida.email = usuario.usr_email;
        usuarioSalida.idOrganizacion = usuario.usr_id_organization;
        usuarioSalida.password = usuario.usr_password;
        usuarioSalida.idGrupo = usuario.usr_id_group;
        usuariosSalida.push(usuarioSalida);
    });
    return usuariosSalida;
});
exports.usuarioGetHandler = usuarioGetHandler;
const usuarioPostHandler = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioEntrada = new UsersEntidad_1.UsersEntidad();
    const usuarioSalida = new UsersModelo_1.UsersModelo();
    usuarioEntrada.usr_name = usuario.nombre;
    usuarioEntrada.usr_surname = usuario.apellido;
    usuarioEntrada.usr_email = usuario.email;
    usuarioEntrada.usr_password = usuario.password;
    usuarioEntrada.usr_id_group = usuario.idGrupo;
    usuarioEntrada.usr_id_organization = usuario.idOrganizacion;
    yield new UsersRepositorio_1.UserRepositorio().crearUser(usuarioEntrada);
    usuarioSalida.nombre = usuarioEntrada.usr_name;
    usuarioSalida.apellido = usuarioEntrada.usr_surname;
    usuarioSalida.email = usuarioEntrada.usr_email;
    usuarioSalida.password = usuarioEntrada.usr_password;
    usuarioSalida.idGrupo = usuarioEntrada.usr_id_group;
    usuarioSalida.idOrganizacion = usuarioEntrada.usr_id_organization;
    return usuarioSalida;
});
exports.usuarioPostHandler = usuarioPostHandler;
const usuarioPutHandler = (id, usuario) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioEntrada = new UsersEntidad_1.UsersEntidad();
    usuarioEntrada.usr_name = usuario.nombre;
    usuarioEntrada.usr_surname = usuario.apellido;
    usuarioEntrada.usr_email = usuario.email;
    usuarioEntrada.usr_password = usuario.password;
    usuarioEntrada.usr_id_group = usuario.idGrupo;
    usuarioEntrada.usr_id_organization = usuario.idOrganizacion;
    const usuarioActualizada = yield new UsersRepositorio_1.UserRepositorio().actualizarUser(id, usuarioEntrada);
    return usuarioActualizada;
});
exports.usuarioPutHandler = usuarioPutHandler;
const usuarioDeleteHandler = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioEliminada = yield new UsersRepositorio_1.UserRepositorio().eliminarUser(id);
    return usuarioEliminada;
});
exports.usuarioDeleteHandler = usuarioDeleteHandler;
//# sourceMappingURL=usuarioHandler.js.map