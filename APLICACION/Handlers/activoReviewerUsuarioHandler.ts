import { ActivoReviewerUsuarioEntidad } from "../../MODELO/ModeloEntrada/ActivoReviewerUsuarioEntidad";
import { ActivoReviewerUsuarioModelo } from "../../MODELO/ModeloSalida/ActivoReviewerUsuarioModelo";
import { ActivoReviewerUsuarioRepositorio } from "../../SERVICIO/Repositorio/ActivoReviewerUsuarioRepositorio";


export const departamentoUsuarioPostHandler = async (departamentoUsuario: ActivoReviewerUsuarioModelo): Promise<ActivoReviewerUsuarioModelo> => {
    const departamentoUsuarioEntrada = new ActivoReviewerUsuarioEntidad();
    const departamentoUsuarioSalida = new ActivoReviewerUsuarioModelo();

    departamentoUsuarioEntrada.ast_id_asset = departamentoUsuario.idActivo;
    departamentoUsuarioEntrada.usr_id_user = departamentoUsuario.idUsuario;

    await new ActivoReviewerUsuarioRepositorio().crearActivoReviewerUsuario(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.idActivo = departamentoUsuarioEntrada.ast_id_asset;
    departamentoUsuarioSalida.idUsuario = departamentoUsuarioEntrada.usr_id_user;
    return departamentoUsuarioSalida;
}

export const departamentoUsuarioDeleteHandler = async (id: number): Promise<number> => {
    const departamentoUsuarioEliminada = await new ActivoReviewerUsuarioRepositorio().eliminarActivoReviewerUsuario(id);
    return departamentoUsuarioEliminada;
}


