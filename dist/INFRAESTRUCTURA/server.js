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
const express_1 = __importDefault(require("express"));
const dbConectionOptions_1 = __importDefault(require("./dbConectionOptions"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Metodos iniciales
        this.dbConnection();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const MAX_RETRIES = 10; // Número máximo de intentos
            const RETRY_DELAY = 5000; // Tiempo de espera entre intentos (en milisegundos)
            for (let i = 0; i <= MAX_RETRIES; i++) {
                try {
                    console.log('Connecting to the database...');
                    yield dbConectionOptions_1.default.initialize();
                    console.log('Database connection established successfully!');
                    break;
                }
                catch (error) {
                    if (i < MAX_RETRIES) {
                        console.log(`Unable to connect to the database. Retrying in ${RETRY_DELAY / 1000} seconds...`);
                        yield new Promise(res => setTimeout(res, RETRY_DELAY));
                    }
                    else {
                        throw new Error(error);
                    }
                }
            }
        });
    }
    //prueba de conexion
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map