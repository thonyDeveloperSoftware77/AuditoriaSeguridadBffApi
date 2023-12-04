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
exports.DepartamentoGrupoRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class DepartamentoGrupoRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerDepartamentoGrupo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_business_unit_groups_organization ${id}`;
            return yield this._grupo.query(query);
        });
    }
    crearDepartamentoGrupo(DepartamentoGrupoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bu_id_business_unit, gr_id_groups } = DepartamentoGrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_bussines_unit_groups '${gr_id_groups}', '${bu_id_business_unit}'`;
            return yield this._grupo.query(query);
        });
    }
    eliminarDepartamentoGrupo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_business_unit_groups ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.DepartamentoGrupoRepositorio = DepartamentoGrupoRepositorio;
//# sourceMappingURL=DepartamentoGrupoRepositorio.js.map