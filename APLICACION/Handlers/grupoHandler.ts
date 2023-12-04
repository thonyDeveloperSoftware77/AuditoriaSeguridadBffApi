import { GrupoEntidad } from "../../MODELO/ModeloEntrada/GrupoEntidad";
import { GrupoModelo } from "../../MODELO/ModeloSalida/GrupoModelo";
import { GrupoRepositorio } from "../../SERVICIO/Repositorio/GrupoRepositorio";


export const grupoGetHandler = async (id: number): Promise<GrupoModelo[]> => {
    const grupoesSalida: GrupoModelo[] = [];
    const grupoes = await new GrupoRepositorio().obtenerGrupos(id);
    grupoes.forEach((grupo: GrupoEntidad) => {
        const grupoSalida = new GrupoModelo();
        grupoSalida.id = grupo.gr_id_organization;
        grupoSalida.nombre = grupo.gr_name;
        grupoSalida.idOrganizacion = grupo.gr_id_organization;
        grupoesSalida.push(grupoSalida);
    });
    return grupoesSalida;
}

export const grupoPostHandler = async (grupo: GrupoModelo): Promise<GrupoModelo> => {
    const grupoEntrada = new GrupoEntidad();
    const grupoSalida = new GrupoModelo();

    grupoEntrada.gr_name = grupo.nombre;
    grupoEntrada.gr_id_organization = grupo.idOrganizacion;

    await new GrupoRepositorio().crearGrupo(grupoEntrada);
    grupoSalida.nombre = grupoEntrada.gr_name;
    grupoSalida.idOrganizacion = grupoEntrada.gr_id_organization;
    return grupoSalida;
}

export const grupoPutHandler = async (id: number, grupo: GrupoModelo): Promise<number> => {
    const grupoEntrada = new GrupoEntidad();

    grupoEntrada.gr_name = grupo.nombre;
    grupoEntrada.gr_id_organization = grupo.idOrganizacion;

    const grupoActualizada = await new GrupoRepositorio().actualizarGrupo(id, grupoEntrada);
    return grupoActualizada;
}

export const grupoDeleteHandler = async (id: number): Promise<number> => {
    const grupoEliminada = await new GrupoRepositorio().eliminarGrupo(id);
    return grupoEliminada;
}


