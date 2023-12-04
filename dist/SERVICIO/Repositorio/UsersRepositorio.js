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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class UserRepositorio {
    constructor() {
        this._user = dbConectionOptions_1.default;
    }
    obtenerUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_users ${id}`;
            return yield this._user.query(query);
        });
    }
    crearUser(UsersEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usr_email, usr_id_group, usr_id_organization, usr_name, usr_password, usr_surname } = UsersEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = usr_name;
            const surname = usr_surname;
            const email = usr_email;
            const password = usr_password;
            const id_organization = usr_id_organization;
            const id_group = usr_id_group;
            const query = `EXEC spi_insertar_users '${name}',  '${surname}', '${email}', '${id_organization}', '${password}', '${id_group}'`;
            return yield this._user.query(query);
        });
    }
    actualizarUser(id, UsersEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usr_email, usr_id_group, usr_id_organization, usr_id_user, usr_name, usr_password, usr_surname } = UsersEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const nombre = usr_name;
            const apellido = usr_surname;
            const correo = usr_email;
            const password = usr_password;
            const id_organization = usr_id_organization;
            const id_group = usr_id_group;
            const query = `EXEC spu_actualizar_users ${id}, '${nombre}', '${apellido}', '${correo}', '${id_organization}', '${password}', '${id_group}'`;
            const result = yield this._user.query(query);
            return result[0].result;
        });
    }
    eliminarUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_users ${id}`;
            const result = yield this._user.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.UserRepositorio = UserRepositorio;
//# sourceMappingURL=UsersRepositorio.js.map