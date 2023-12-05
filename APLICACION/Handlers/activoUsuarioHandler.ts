import { ActivoUsuarioEntidad } from "../../MODELO/ModeloEntrada/ActivoUsuarioEntidad";
import { ActivoUsuarioModelo } from "../../MODELO/ModeloSalida/ActivoUsuarioModelo";
import { ActivoUsuarioRepositorio } from "../../SERVICIO/Repositorio/ActivoUsuarioRepositorio";


export const departamentoUsuarioPostHandler = async (departamentoUsuario: ActivoUsuarioModelo): Promise<ActivoUsuarioModelo> => {
    const departamentoUsuarioEntrada = new ActivoUsuarioEntidad();
    const departamentoUsuarioSalida = new ActivoUsuarioModelo();

    departamentoUsuarioEntrada.ast_id_asset = departamentoUsuario.ast_id_asset;
    departamentoUsuarioEntrada.usr_id_user = departamentoUsuario.usr_id_user;

    await new ActivoUsuarioRepositorio().crearActivoUsuario(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.ast_id_asset = departamentoUsuarioEntrada.ast_id_asset;
    departamentoUsuarioSalida.usr_id_user = departamentoUsuarioEntrada.usr_id_user;
    return departamentoUsuarioSalida;
}

export const departamentoUsuarioDeleteHandler = async (id: number): Promise<number> => {
    const departamentoUsuarioEliminada = await new ActivoUsuarioRepositorio().eliminarActivoUsuario(id);
    return departamentoUsuarioEliminada;
}


