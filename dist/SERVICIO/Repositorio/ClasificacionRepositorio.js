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
exports.ClasificacionRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class ClasificacionRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerClasificaciones() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_classifications`;
            return yield this._grupo.query(query);
        });
    }
    crearClasificacion(ClasificacionEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clas_name, clas_definition, clas_example } = ClasificacionEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = clas_name;
            const definition = clas_definition;
            const examples = clas_example;
            const query = `EXEC spi_insertar_classifications '${name}', '${definition}', '${examples}'`;
            return yield this._grupo.query(query);
        });
    }
    actualizarClasificacion(id, ClasificacionEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clas_name, clas_definition, clas_example } = ClasificacionEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const nombre = clas_name;
            const definicion = clas_definition;
            const ejemplos = clas_example;
            const query = `EXEC spu_actualizar_classifications ${id}, '${nombre}', '${definicion}', '${ejemplos}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarClasificacion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_classifications ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.ClasificacionRepositorio = ClasificacionRepositorio;
//# sourceMappingURL=ClasificacionRepositorio.js.map