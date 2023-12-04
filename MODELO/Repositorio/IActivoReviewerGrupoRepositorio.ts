import { ActivoReviewerGrupoEntidad } from "../ModeloEntrada/ActivoReviewerGrupoEntidad";

export interface IActivoReviewerGrupoRepositorio {
    obtenerActivoReviewerGrupo(id: number): Promise<ActivoReviewerGrupoEntidad[]>;
    crearActivoReviewerGrupo(grupo: ActivoReviewerGrupoEntidad): Promise<ActivoReviewerGrupoEntidad>;
    eliminarActivoReviewerGrupo(id: number): Promise<number>;
}