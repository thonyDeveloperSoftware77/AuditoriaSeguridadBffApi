import { ActivoGrupoEntidad } from "../../MODELO/ModeloEntrada/ActivoGrupoEntidad";
import { ActivoGrupoModelo } from "../../MODELO/ModeloSalida/ActivoGrupoModelo";
import { ActivoGrupoRepositorio } from "../../SERVICIO/Repositorio/ActivoGrupoRepositorio";


export const departamentoGrupoPostHandler = async (departamento: ActivoGrupoModelo): Promise<ActivoGrupoModelo> => {
    const departamentoEntrada = new ActivoGrupoEntidad();
    const departamentoSalida = new ActivoGrupoModelo();

    departamentoEntrada.ast_id_asset = departamento.idActivo;
    departamentoEntrada.gr_id_groups = departamento.idGrupo;

    await new ActivoGrupoRepositorio().crearActivoGrupo(departamentoEntrada);
    departamentoSalida.idActivo = departamentoEntrada.ast_id_asset;
    departamentoSalida.idGrupo = departamentoEntrada.gr_id_groups;
    return departamentoSalida;
}

export const departamentoGrupoDeleteHandler = async (id: number): Promise<number> => {
    const departamentoEliminada = await new ActivoGrupoRepositorio().eliminarActivoGrupo(id);
    return departamentoEliminada;
}


