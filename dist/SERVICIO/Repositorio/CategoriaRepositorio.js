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
exports.CategoriaRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class CategoriaRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_category`;
            return yield this._grupo.query(query);
        });
    }
    crearCategoria(CategoriaEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctg_name, ctg_definition, ctg_examples, ctg_type } = CategoriaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = ctg_name;
            const definition = ctg_definition;
            const examples = ctg_examples;
            const type = ctg_type;
            const query = `EXEC spi_insertar_category '${name}', '${definition}', '${examples}', '${type}'`;
            return yield this._grupo.query(query);
        });
    }
    actualizarCategoria(id, CategoriaEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ctg_name, ctg_definition, ctg_examples, ctg_type } = CategoriaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const nombre = ctg_name;
            const definicion = ctg_definition;
            const ejemplos = ctg_examples;
            const type = ctg_type;
            const query = `EXEC spu_actualizar_category ${id}, '${nombre}', '${definicion}', '${ejemplos}', '${type}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarCategoria(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_category ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.CategoriaRepositorio = CategoriaRepositorio;
//# sourceMappingURL=CategoriaRepositorio.js.map