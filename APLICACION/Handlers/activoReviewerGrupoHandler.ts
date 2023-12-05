import { ActivoReviewerGrupoEntidad } from "../../MODELO/ModeloEntrada/ActivoReviewerGrupoEntidad";
import { ActivoReviewerGrupoModelo } from "../../MODELO/ModeloSalida/ActivoReviewerGrupoModelo";
import { ActivoReviewerGrupoRepositorio } from "../../SERVICIO/Repositorio/ActivoReviewerGrupoRepositorio";


export const departamentoGrupoPostHandler = async (departamento: ActivoReviewerGrupoModelo): Promise<ActivoReviewerGrupoModelo> => {
    const departamentoEntrada = new ActivoReviewerGrupoEntidad();
    const departamentoSalida = new ActivoReviewerGrupoModelo();

    departamentoEntrada.ast_id_asset = departamento.idActivo;
    departamentoEntrada.gr_id_groups = departamento.idGrupo;

    await new ActivoReviewerGrupoRepositorio().crearActivoReviewerGrupo(departamentoEntrada);
    departamentoSalida.idActivo = departamentoEntrada.ast_id_asset;
    departamentoSalida.idGrupo = departamentoEntrada.gr_id_groups;
    return departamentoSalida;
}

export const departamentoGrupoDeleteHandler = async (id: number): Promise<number> => {
    const departamentoEliminada = await new ActivoReviewerGrupoRepositorio().eliminarActivoReviewerGrupo(id);
    return departamentoEliminada;
}


