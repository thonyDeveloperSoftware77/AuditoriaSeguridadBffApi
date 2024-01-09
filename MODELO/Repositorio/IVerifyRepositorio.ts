import { VerifyEntidad } from "../ModeloEntrada/VerifyEntidad";

export interface IVerifyRepositorio {
    obtenerVerify(email: string, password:string): Promise<VerifyEntidad[]>;
}