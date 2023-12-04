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
const cors_1 = __importDefault(require("cors"));
const dbConectionOptions_1 = __importDefault(require("./Contexto/dbConectionOptions"));
const organizacionRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/organizacionRouter"));
const grupoRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/grupoRouter"));
const userRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/userRouter"));
const etiquetaRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/etiquetaRouter"));
const clasificacionRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/clasificacionRouter"));
const categoriaRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/categoriaRouter"));
const criticidadRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/criticidadRouter"));
const departamentoUsuarioRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/departamentoUsuarioRouter"));
const departamentoGrupoRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/departamentoGrupoRouter"));
const departamentoRouter_1 = __importDefault(require("../PROYECTO_AUDITORIA/Routes/departamentoRouter"));
class Server {
    constructor() {
        this.apiPaths = {
            organizacion: '/api/organizacion',
            grupo: '/api/grupo',
            users: '/api/users',
            etiqueta: '/api/etiqueta',
            clasificacion: '/api/clasificacion',
            categoria: '/api/categoria',
            criticidad: '/api/criticidad',
            departamentoUsuario: '/api/departamentoUsuario',
            departamentoGrupo: '/api/departamentoGrupo',
            departamento: '/api/departamento',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Metodos iniciales
        this.dbConnection();
        //Middlewares
        this.middlewares();
        //Definicion de las rutas
        this.routes();
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
    middlewares() {
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
        //CORS
        this.app.use((0, cors_1.default)({
            origin: [
                'https://web-auditoria-neon.vercel.app',
                'https://web-auditoria-git-main-auditoriainternaecuador.vercel.app',
                'https://web-auditoria-auditoriainternaecuador.vercel.app',
                //Añade local host
                'http://localhost:3000',
                //Añade todo
                '*'
            ]
        }));
    }
    routes() {
        this.app.use(this.apiPaths.organizacion, /*this.authMiddleware.bind(this),*/ organizacionRouter_1.default);
        this.app.use(this.apiPaths.grupo, /*this.authMiddleware.bind(this),*/ grupoRouter_1.default);
        this.app.use(this.apiPaths.users, /*this.authMiddleware.bind(this),*/ userRouter_1.default);
        this.app.use(this.apiPaths.etiqueta, /*this.authMiddleware.bind(this),*/ etiquetaRouter_1.default);
        this.app.use(this.apiPaths.clasificacion, /*this.authMiddleware.bind(this),*/ clasificacionRouter_1.default);
        this.app.use(this.apiPaths.categoria, /*this.authMiddleware.bind(this),*/ categoriaRouter_1.default);
        this.app.use(this.apiPaths.criticidad, /*this.authMiddleware.bind(this),*/ criticidadRouter_1.default);
        this.app.use(this.apiPaths.departamentoUsuario, /*this.authMiddleware.bind(this),*/ departamentoUsuarioRouter_1.default);
        this.app.use(this.apiPaths.departamentoGrupo, /*this.authMiddleware.bind(this),*/ departamentoGrupoRouter_1.default);
        this.app.use(this.apiPaths.departamento, /*this.authMiddleware.bind(this),*/ departamentoRouter_1.default);
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