import express, { Application } from "express";
import cors from 'cors';
import AppDataSource from "./Contexto/dbConectionOptions";
import organizacionRouter from "../PROYECTO_AUDITORIA/Routes/organizacionRouter";
class Server{
    private app: Application;
    private port: string;
    private apiPaths = {
        organizacion: '/api/organizacion',
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
    }

    //prueba de conexion


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;