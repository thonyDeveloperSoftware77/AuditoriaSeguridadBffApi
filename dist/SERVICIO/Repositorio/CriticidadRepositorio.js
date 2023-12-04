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
exports.CriticidadRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class CriticidadRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerCriticidad() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_criticality`;
            return yield this._grupo.query(query);
        });
    }
    crearCriticidad(CriticidadEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cri_criterio, cri_value } = CriticidadEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const value = cri_value;
            const criterio = cri_criterio;
            const query = `EXEC spi_insertar_criticality '${value}', '${criterio}'`;
            return yield this._grupo.query(query);
        });
    }
    actualizarCriticidad(id, CriticidadEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cri_criterio, cri_value } = CriticidadEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const valor = cri_value;
            const criterio = cri_criterio;
            const query = `EXEC spu_actualizar_criticality ${id}, '${valor}', '${criterio}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarCriticidad(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_criticality ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.CriticidadRepositorio = CriticidadRepositorio;
//# sourceMappingURL=CriticidadRepositorio.js.map