import { GrupoEntidad } from "../../MODELO/ModeloEntrada/GrupoEntidad";
import { GrupoModelo } from "../../MODELO/ModeloSalida/GrupoModelo";
import { GrupoRepositorio } from "../../SERVICIO/Repositorio/GrupoRepositorio";


export const grupoGetHandler = async (id: number): Promise<GrupoModelo[]> => {
    const grupoesSalida: GrupoModelo[] = [];
    const grupoes = await new GrupoRepositorio().obtenerGrupos(id);
    grupoes.forEach((grupo: GrupoEntidad) => {
        const grupoSalida = new GrupoModelo();
        grupoSalida.id = grupo.gr_id_groups;
        grupoSalida.nombre = grupo.gr_name;
        grupoSalida.idOrganizacion = grupo.gr_id_organization;
        grupoSalida.rol = grupo.gr_rol;
        grupoesSalida.push(grupoSalida);
    });
    return grupoesSalida;
}

export const grupoPostHandler = async (grupo: GrupoModelo): Promise<GrupoModelo> => {
    const grupoEntrada = new GrupoEntidad();
    const grupoSalida = new GrupoModelo();

    grupoEntrada.gr_name = grupo.nombre;
    grupoEntrada.gr_id_organization = grupo.idOrganizacion;
    grupoEntrada.gr_rol = grupo.rol;

    await new GrupoRepositorio().crearGrupo(grupoEntrada);
    grupoSalida.nombre = grupoEntrada.gr_name;
    grupoSalida.idOrganizacion = grupoEntrada.gr_id_organization;
    grupoSalida.rol = grupoEntrada.gr_rol;
    return grupoSalida;
}

export const grupoPutHandler = async (id: number, grupo: GrupoModelo): Promise<number> => {
    const grupoEntrada = new GrupoEntidad();

    grupoEntrada.gr_name = grupo.nombre;
    grupoEntrada.gr_id_organization = grupo.idOrganizacion;
    grupoEntrada.gr_rol = grupo.rol;

    const grupoActualizada = await new GrupoRepositorio().actualizarGrupo(id, grupoEntrada);
    return grupoActualizada;
}

export const grupoDeleteHandler = async (id: number): Promise<number> => {
    const grupoEliminada = await new GrupoRepositorio().eliminarGrupo(id);
    return grupoEliminada;
}


