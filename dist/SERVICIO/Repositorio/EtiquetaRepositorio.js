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
exports.EtiquetaRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class EtiquetaRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerEtiquetas() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_labels`;
            return yield this._grupo.query(query);
        });
    }
    crearEtiqueta(EtiquetaEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { lbl_name, lbl_description } = EtiquetaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = lbl_name;
            const description = lbl_description;
            const query = `EXEC spi_insertar_labels '${name}', '${description}'`;
            return yield this._grupo.query(query);
        });
    }
    actualizarEtiqueta(id, EtiquetaEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { lbl_name, lbl_description } = EtiquetaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const nombre = lbl_name;
            const descripcion = lbl_description;
            const query = `EXEC spu_actualizar_labels ${id}, '${nombre}', '${descripcion}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarEtiqueta(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_labels ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.EtiquetaRepositorio = EtiquetaRepositorio;
//# sourceMappingURL=EtiquetaRepositorio.js.map