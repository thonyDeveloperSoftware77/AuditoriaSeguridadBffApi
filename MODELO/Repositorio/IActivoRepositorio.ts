import { ActivoEntidad } from "../ModeloEntrada/ActivoEntidad";

export interface IActivoRepositorio {
    obtenerActivo(): Promise<ActivoEntidad[]>;
    crearActivo(grupo: ActivoEntidad): Promise<ActivoEntidad>;
    actualizarActivo(id: number, grupo: ActivoEntidad): Promise<number>;
    eliminarActivo(id: number): Promise<number>;
}