import { ValoracionActivoEntidad } from "../ModeloEntrada/ValoracionActivoEntidad";

export interface IValoracionActivoRepositorio {
    obtenerValoracionActivos(id: number): Promise<ValoracionActivoEntidad[]>;
    crearValoracionActivo(grupo: ValoracionActivoEntidad): Promise<ValoracionActivoEntidad>;
    actualizarValoracionActivo(id: number, grupo: ValoracionActivoEntidad): Promise<number>;
    eliminarValoracionActivo(id: number): Promise<number>;
}