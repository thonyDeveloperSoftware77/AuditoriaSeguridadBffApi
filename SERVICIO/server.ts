import express, { Application } from "express";
import cors from 'cors';
import AppDataSource from "./Contexto/dbConectionOptions";
import organizacionRouter from "../PROYECTO_AUDITORIA/Routes/organizacionRouter";
import grupoRouter from "../PROYECTO_AUDITORIA/Routes/grupoRouter";
import usersRouter from "../PROYECTO_AUDITORIA/Routes/userRouter";
import etiquetaRouter from "../PROYECTO_AUDITORIA/Routes/etiquetaRouter";
import clasificacion from "../PROYECTO_AUDITORIA/Routes/clasificacionRouter";
import categoria from "../PROYECTO_AUDITORIA/Routes/categoriaRouter";
import criticidad from "../PROYECTO_AUDITORIA/Routes/criticidadRouter";
import departamentoUsuarioRouter from "../PROYECTO_AUDITORIA/Routes/departamentoUsuarioRouter";
import departamentoGrupoRouter from "../PROYECTO_AUDITORIA/Routes/departamentoGrupoRouter";
import departamentoRouter from "../PROYECTO_AUDITORIA/Routes/departamentoRouter";
import activoRouter from "../PROYECTO_AUDITORIA/Routes/activoRouter";
import activoUsuarioRouter from "../PROYECTO_AUDITORIA/Routes/activoUsuarioRouter";
import activoGrupoRouter from "../PROYECTO_AUDITORIA/Routes/activoGrupoRouter";
import activoReviewerUserRouter from "../PROYECTO_AUDITORIA/Routes/activoReviewerUsuarioRouter";
import activoReviewerGroupRouter from "../PROYECTO_AUDITORIA/Routes/activoReviewerGrupoRouter";
import tipoActivoRouter from "../PROYECTO_AUDITORIA/Routes/tipoActivoRouter";
import activoBusinesUnitRouter from "../PROYECTO_AUDITORIA/Routes/activoBusinessUnitRouter";



class Server{
    private app: Application;
    private port: string;
    private apiPaths = {
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
        activoUsuario: '/api/activoUsuario',
        activoGrupo: '/api/activoGrupo',
        activoReviewerUser: '/api/reviewerUser',
        activoReviewerGroup: '/api/reviewerGroup',
        activo: '/api/activo',
        tipoActivo: '/api/tipoActivo',
        activoBusinessUnit: '/api/activoBusinessUnit'
    }
   

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        //Metodos iniciales
        this.dbConnection();
        //Middlewares
        this.middlewares();
        //Definicion de las rutas
        this.routes();
    }

    async dbConnection() {
        const MAX_RETRIES = 10; // Número máximo de intentos
        const RETRY_DELAY = 5000; // Tiempo de espera entre intentos (en milisegundos)

        for (let i = 0; i <= MAX_RETRIES; i++) {
            try {
                console.log('Connecting to the database...');
                await AppDataSource.initialize()
                console.log('Database connection established successfully!')
                break;
            } catch (error: any) {
                if (i < MAX_RETRIES) {
                    console.log(`Unable to connect to the database. Retrying in ${RETRY_DELAY / 1000} seconds...`);
                    await new Promise(res => setTimeout(res, RETRY_DELAY));
                } else {
                    throw new Error(error);
                }
            }
        }
    }
    middlewares() {
        
        //Lectura del body
        this.app.use(express.json());
        //Carpeta publica
        this.app.use(express.static('public'));
        //CORS
        this.app.use(cors({
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
        this.app.use(this.apiPaths.organizacion, /*this.authMiddleware.bind(this),*/ organizacionRouter);
        this.app.use(this.apiPaths.grupo, /*this.authMiddleware.bind(this),*/ grupoRouter);
        this.app.use(this.apiPaths.users, /*this.authMiddleware.bind(this),*/ usersRouter);
        this.app.use(this.apiPaths.etiqueta, /*this.authMiddleware.bind(this),*/ etiquetaRouter);
        this.app.use(this.apiPaths.clasificacion, /*this.authMiddleware.bind(this),*/ clasificacion);
        this.app.use(this.apiPaths.categoria, /*this.authMiddleware.bind(this),*/ categoria);
        this.app.use(this.apiPaths.criticidad, /*this.authMiddleware.bind(this),*/ criticidad);
        this.app.use(this.apiPaths.departamentoUsuario, /*this.authMiddleware.bind(this),*/ departamentoUsuarioRouter);
        this.app.use(this.apiPaths.departamentoGrupo, /*this.authMiddleware.bind(this),*/ departamentoGrupoRouter);
        this.app.use(this.apiPaths.departamento, /*this.authMiddleware.bind(this),*/ departamentoRouter);
        this.app.use(this.apiPaths.activoUsuario, /*this.authMiddleware.bind(this),*/ activoUsuarioRouter);
        this.app.use(this.apiPaths.activoGrupo, /*this.authMiddleware.bind(this),*/ activoGrupoRouter);
        this.app.use(this.apiPaths.activoReviewerUser, /*this.authMiddleware.bind(this),*/ activoReviewerUserRouter);
        this.app.use(this.apiPaths.activoReviewerGroup, /*this.authMiddleware.bind(this),*/ activoReviewerGroupRouter);
        this.app.use(this.apiPaths.activo, /*this.authMiddleware.bind(this),*/ activoRouter);
        this.app.use(this.apiPaths.tipoActivo, /*this.authMiddleware.bind(this),*/ tipoActivoRouter);
        this.app.use(this.apiPaths.activoBusinessUnit, /*this.authMiddleware.bind(this),*/ activoBusinesUnitRouter);
    }

    //prueba de conexion


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;