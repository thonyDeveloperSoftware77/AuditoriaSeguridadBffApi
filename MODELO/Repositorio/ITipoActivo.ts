import { TipoActivoEntidad } from "../ModeloEntrada/TipoActivoEntidad";

export interface ITipoActivoRepositorio {
    obtenerTipoActivo(): Promise<TipoActivoEntidad[]>;
    crearTipoActivo(grupo: TipoActivoEntidad): Promise<TipoActivoEntidad>;
    actualizarTipoActivo(id: number, grupo: TipoActivoEntidad): Promise<number>;
    eliminarTipoActivo(id: number): Promise<number>;
}