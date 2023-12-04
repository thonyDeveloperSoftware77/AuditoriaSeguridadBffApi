import { DepartamentoUsuarioEntidad } from "../ModeloEntrada/DepartamentoUsuarioEntidad";

export interface IDepartamentoUsuarioRepositorio {
    obtenerDepartamentoUsuario(id: number): Promise<DepartamentoUsuarioEntidad[]>;
    crearDepartamentoUsuario(grupo: DepartamentoUsuarioEntidad): Promise<DepartamentoUsuarioEntidad>;
    eliminarDepartamentoUsuario(id: number): Promise<number>;
}