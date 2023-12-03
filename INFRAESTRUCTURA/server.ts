import express, { Application } from "express";
import AppDataSource from "./dbConectionOptions";
class Server{
    private app: Application;
    private port: string;
   

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        //Metodos iniciales
        this.dbConnection();
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

    //prueba de conexion


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

export default Server;