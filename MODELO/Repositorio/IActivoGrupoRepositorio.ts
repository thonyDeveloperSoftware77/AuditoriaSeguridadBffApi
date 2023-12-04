import { ActivoGrupoEntidad } from "../ModeloEntrada/ActivoGrupoEntidad";

export interface IActivoGrupoRepositorio {
    obtenerActivoGrupo(id: number): Promise<ActivoGrupoEntidad[]>;
    crearActivoGrupo(grupo: ActivoGrupoEntidad): Promise<ActivoGrupoEntidad>;
    eliminarActivoGrupo(id: number): Promise<number>;
}