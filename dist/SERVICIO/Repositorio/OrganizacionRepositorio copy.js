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
exports.OrganizacionRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class OrganizacionRepositorio {
    constructor() {
        this._organizacion = dbConectionOptions_1.default;
    }
    obtenerOrganizaciones() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "EXEC sps_consulta_todo_organization";
            return yield this._organizacion.query(query);
        });
    }
    crearOrganizacion(OrganizacionEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { org_name, org_sector, org_ubication, org_main_activity } = OrganizacionEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = org_name;
            const sector = org_sector;
            const ubication = org_ubication;
            const main_activity = org_main_activity;
            const query = `EXEC spi_insertar_organization '${name}', '${sector}', '${ubication}', '${main_activity}'`;
            return yield this._organizacion.query(query);
        });
    }
    actualizarOrganizacion(id, OrganizacionEntidad) {
        return __awaiter(this, void 0, void 0, function* () {
            const { org_name, org_sector, org_ubication, org_main_activity } = OrganizacionEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = org_name;
            const sector = org_sector;
            const ubication = org_ubication;
            const main_activity = org_main_activity;
            const query = `EXEC spu_actualizar_organization ${id}, '${name}', '${sector}', '${ubication}', '${main_activity}'`;
            const result = yield this._organizacion.query(query);
            return result[0].result;
        });
    }
    eliminarOrganizacion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC spd_eliminar_organization ${id}`;
            const result = yield this._organizacion.query(query);
            console.log(result);
            return result[0].result;
        });
    }
}
exports.OrganizacionRepositorio = OrganizacionRepositorio;
//# sourceMappingURL=OrganizacionRepositorio%20copy.js.map