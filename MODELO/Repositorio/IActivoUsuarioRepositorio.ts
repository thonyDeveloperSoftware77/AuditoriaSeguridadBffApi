import { ActivoUsuarioEntidad } from "../ModeloEntrada/ActivoUsuarioEntidad";

export interface IActivoUsuarioRepositorio {
    obtenerActivoUsuario(id: number): Promise<ActivoUsuarioEntidad[]>;
    crearActivoUsuario(grupo: ActivoUsuarioEntidad): Promise<ActivoUsuarioEntidad>;
    eliminarActivoUsuario(id: number): Promise<number>;
}