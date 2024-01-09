import { IVerifyRepositorio } from "../../MODELO/Repositorio/IVerifyRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class VerifyRepositorio implements IVerifyRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerVerify(email: string, password: string) {
            const query = `EXEC sp_VerifyUser '${email}', '${password}'`;
            return await this._grupo.query(query);
        }
}