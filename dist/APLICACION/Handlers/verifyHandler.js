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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyGetHandler = void 0;
const VerifyModelo_1 = require("../../MODELO/ModeloSalida/VerifyModelo");
const VerifyRepositorio_1 = require("../../SERVICIO/Repositorio/VerifyRepositorio");
const VerifyGetHandler = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const VerifyesSalida = [];
    const Verifyes = yield new VerifyRepositorio_1.VerifyRepositorio().obtenerVerify(email, password);
    Verifyes.forEach((Verify) => {
        const VerifySalida = new VerifyModelo_1.VerifyModelo();
        VerifySalida.Nombre = Verify.Nombre;
        VerifySalida.Apellido = Verify.Apellido;
        VerifySalida.Rol = Verify.Rol;
        VerifySalida.IdOrganizacion = Verify.IdOrganizacion;
        VerifySalida.Resultado = Verify.Resultado;
        VerifyesSalida.push(VerifySalida);
    });
    return VerifyesSalida;
});
exports.VerifyGetHandler = VerifyGetHandler;
//# sourceMappingURL=verifyHandler.js.map