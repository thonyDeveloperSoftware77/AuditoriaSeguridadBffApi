import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const AppDataSource = new DataSource({
    type: "mssql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});

export default AppDataSource;
