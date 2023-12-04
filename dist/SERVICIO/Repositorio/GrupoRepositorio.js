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
exports.GrupoRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class GrupoRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerGrupos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_groups ${id}`;
            return yield this._grupo.query(query);
        });
    }
    crearGrupo(GrupoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { gr_name, gr_id_organization } = GrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = gr_name;
            const id_organization = gr_id_organization;
            const query = `EXEC spi_insertar_groups '${name}', '${id_organization}'`;
            return yield this._grupo.query(query);
        });
    }
    actualizarGrupo(id, GrupoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { gr_id_organization, gr_name } = GrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const nombre = gr_name;
            const id_organization = gr_id_organization;
            console.log(id_organization);
            console.log(nombre);
            console.log(id);
            const query = `EXEC spu_actualizar_groups ${id}, '${nombre}', '${id_organization}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarGrupo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_groups ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.GrupoRepositorio = GrupoRepositorio;
//# sourceMappingURL=GrupoRepositorio.js.map