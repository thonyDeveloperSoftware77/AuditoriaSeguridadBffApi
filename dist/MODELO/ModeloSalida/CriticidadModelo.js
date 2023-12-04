"use strict";
//Cambia los nombres
//private _cri_id_criticality?: number;
//private _cri_value?: string;
//private _cri_criterio?: string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriticidadModelo = void 0;
class CriticidadModelo {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nombre() {
        return this._valor;
    }
    set nombre(value) {
        this._valor = value;
    }
    get criterio() {
        return this._criterio;
    }
    set criterio(value) {
        this._criterio = value;
    }
}
exports.CriticidadModelo = CriticidadModelo;
//# sourceMappingURL=CriticidadModelo.js.map