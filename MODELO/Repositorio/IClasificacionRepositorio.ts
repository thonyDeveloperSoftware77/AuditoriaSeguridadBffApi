import { ClasificacionEntidad } from "../ModeloEntrada/ClasificacionEntidad";

export interface IClasificacionRepositorio {
    obtenerClasificaciones(): Promise<ClasificacionEntidad[]>;
    crearClasificacion(grupo: ClasificacionEntidad): Promise<ClasificacionEntidad>;
    actualizarClasificacion(id: number, grupo: ClasificacionEntidad): Promise<number>;
    eliminarClasificacion(id: number): Promise<number>;
}