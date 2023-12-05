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
exports.ActivoRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class ActivoRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerActivo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sps_consulta_todo_asset ${id}`;
            return yield this._grupo.query(query);
        });
    }
    crearActivo(ActivoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ast_code, ast_name, ast_description, ast_ubication, lbl_name, a_type_name, cri_id_criteria, ctg_id_category, clas_id_class, asst_id_organization, ast_review_date } = ActivoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_asset '${ast_code}', '${ast_name}', '${ast_description}', '${ast_ubication}', '${lbl_name}', '${a_type_name}', '${cri_id_criteria}', '${ctg_id_category}', '${clas_id_class}', '${asst_id_organization}', '${ast_review_date}'`;
            return yield this._grupo.query(query);
        });
    }
    actualizarActivo(id, ActivoEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ast_code, ast_name, ast_description, ast_ubication, lbl_name, a_type_name, cri_id_criteria, ctg_id_category, clas_id_class, asst_id_organization, ast_review_date } = ActivoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spu_actualizar_asset ${id}, '${ast_code}', '${ast_name}', '${ast_description}', '${ast_ubication}', '${lbl_name}', '${a_type_name}', '${cri_id_criteria}', '${ctg_id_category}', '${clas_id_class}', '${asst_id_organization}', '${ast_review_date}'`;
            const result = yield this._grupo.query(query);
            return result[0].result;
        });
    }
    eliminarActivo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_asset ${id}`;
            const result = yield this._grupo.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.ActivoRepositorio = ActivoRepositorio;
//# sourceMappingURL=ActivoRepositorio.js.map