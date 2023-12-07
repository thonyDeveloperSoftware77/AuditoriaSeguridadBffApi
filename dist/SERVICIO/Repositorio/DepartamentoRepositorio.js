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
exports.DepartamentoRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class DepartamentoRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerDepartamento(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_business_unit ${id}`;
            return yield this._grupo.query(query);
        });
    }
    crearDepartamento(DepartamentoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bu_name, bu_description, bu_id_organization } = DepartamentoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = bu_name;
            const description = bu_description;
            const id_organization = bu_id_organization;
            const query = `EXEC spi_insertar_business_unit '${name}', '${description}', '${id_organization}'`;
            console.log("query");
            return yield this._grupo.query(query);
        });
    }
    actualizarDepartamento(id, DepartamentoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bu_name, bu_description, bu_id_organization } = DepartamentoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const nombre = bu_name;
            const descripcion = bu_description;
            const query = `EXEC spu_actualizar_business_unit ${id}, '${nombre}', '${descripcion}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarDepartamento(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_business_unit ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.DepartamentoRepositorio = DepartamentoRepositorio;
//# sourceMappingURL=DepartamentoRepositorio.js.map