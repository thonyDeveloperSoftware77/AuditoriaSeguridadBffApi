import { DepartamentoEntidad } from "../ModeloEntrada/DepartamentoEntidad";

export interface IDepartamentoRepositorio {
    obtenerDepartamento(id: number): Promise<DepartamentoEntidad[]>;
    crearDepartamento(grupo: DepartamentoEntidad): Promise<DepartamentoEntidad>;
    actualizarDepartamento(id: number, grupo: DepartamentoEntidad): Promise<number>;
    eliminarDepartamento(id: number): Promise<number>;
}