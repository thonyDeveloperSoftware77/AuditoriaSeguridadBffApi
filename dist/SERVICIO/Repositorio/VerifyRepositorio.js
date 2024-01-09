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
exports.VerifyRepositorio = void 0;
const dbConectionOptions_1 = __importDefault(require("../Contexto/dbConectionOptions"));
class VerifyRepositorio {
    constructor() {
        this._grupo = dbConectionOptions_1.default;
    }
    obtenerVerify(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `EXEC sp_VerifyUser '${email}', '${password}'`;
            return yield this._grupo.query(query);
        });
    }
}
exports.VerifyRepositorio = VerifyRepositorio;
//# sourceMappingURL=VerifyRepositorio.js.map