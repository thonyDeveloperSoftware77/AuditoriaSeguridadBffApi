import { GrupoEntidad } from "../ModeloEntrada/GrupoEntidad";

export interface IGrupoRepositorio {
    obtenerGrupos(id: number): Promise<GrupoEntidad[]>;
    crearGrupo(grupo: GrupoEntidad): Promise<GrupoEntidad>;
    actualizarGrupo(id: number, grupo: GrupoEntidad): Promise<number>;
    eliminarGrupo(id: number): Promise<number>;
}