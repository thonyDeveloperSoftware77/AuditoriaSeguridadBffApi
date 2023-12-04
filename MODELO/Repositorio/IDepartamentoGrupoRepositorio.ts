import { DepartamentoGrupoEntidad } from "../ModeloEntrada/DepartamentoGrupoEntidad";

export interface IDepartamentoGrupoRepositorio {
    obtenerDepartamentoGrupo(id: number): Promise<DepartamentoGrupoEntidad[]>;
    crearDepartamentoGrupo(grupo: DepartamentoGrupoEntidad): Promise<DepartamentoGrupoEntidad>;
    eliminarDepartamentoGrupo(id: number): Promise<number>;
}