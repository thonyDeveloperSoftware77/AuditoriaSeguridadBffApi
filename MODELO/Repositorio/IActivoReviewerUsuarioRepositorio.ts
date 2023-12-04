import { ActivoReviewerUsuarioEntidad } from "../ModeloEntrada/ActivoReviewerUsuarioEntidad";

export interface IActivoReviewerUsuarioRepositorio {
    obtenerActivoReviewerUsuario(id: number): Promise<ActivoReviewerUsuarioEntidad[]>;
    crearActivoReviewerUsuario(grupo: ActivoReviewerUsuarioEntidad): Promise<ActivoReviewerUsuarioEntidad>;
    eliminarActivoReviewerUsuario(id: number): Promise<number>;
}