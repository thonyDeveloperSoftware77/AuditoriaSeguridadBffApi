import { CriticidadEntidad } from "../ModeloEntrada/CriticidadEntidad";

export interface ICriticidadRepositorio {
    obtenerCriticidad(): Promise<CriticidadEntidad[]>;
    crearCriticidad(grupo: CriticidadEntidad): Promise<CriticidadEntidad>;
    actualizarCriticidad(id: number, grupo: CriticidadEntidad): Promise<number>;
    eliminarCriticidad(id: number): Promise<number>;
}