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
exports.TipoActivoRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class TipoActivoRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerTipoActivo() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_asset_type`;
            return yield this._grupo.query(query);
        });
    }
    crearTipoActivo(TipoActivoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { a_type_name, a_type_description } = TipoActivoEntidad;
            const query = `EXEC spi_insertar_asset_type '${a_type_name}', '${a_type_description}'`;
            return yield this._grupo.query(query);
        });
    }
    actualizarTipoActivo(id, TipoActivoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { a_type_name, a_type_description } = TipoActivoEntidad;
            const query = `EXEC spu_actualizar_asset_type ${id}, '${a_type_name}', '${a_type_description}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarTipoActivo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_asset_type ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.TipoActivoRepositorio = TipoActivoRepositorio;
//# sourceMappingURL=TipoActivoRepositorio.js.map