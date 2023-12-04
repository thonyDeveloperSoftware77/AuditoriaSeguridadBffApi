"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentoGrupoModelo = void 0;
//Cambia los nombres
// private _gr_id_groups?: number;
//private _gr_name?: string;
//private _bu_id_business_unit?: number;
class DepartamentoGrupoModelo {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get idDepartamento() {
        return this._idDepartamento;
    }
    set idDepartamento(value) {
        this._idDepartamento = value;
    }
}
exports.DepartamentoGrupoModelo = DepartamentoGrupoModelo;
//# sourceMappingURL=DepartamentoGrupoModelo.js.map