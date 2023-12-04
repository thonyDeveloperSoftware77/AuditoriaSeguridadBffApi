import { OrganizacionEntidad } from "../../MODELO/ModeloEntrada/OrganizacionEntidad";
import { OrganizacionModelo } from "../../MODELO/ModeloSalida/OrganizacionModelo";
import { OrganizacionRepositorio } from "../../SERVICIO/Repositorio/OrganizacionRepositorio";


export const organizacionGetHandler = async (): Promise<OrganizacionModelo[]> => {
    const organizacionesSalida: OrganizacionModelo[] = [];
    const organizaciones = await new OrganizacionRepositorio().obtenerOrganizaciones();
    organizaciones.forEach((organizacion: OrganizacionEntidad) => {
        const organizacionSalida = new OrganizacionModelo();
        organizacionSalida.id = organizacion.org_id_organization;
        organizacionSalida.nombre = organizacion.org_name;
        organizacionSalida.sector = organizacion.org_sector;
        organizacionSalida.ubicacion = organizacion.org_ubication;
        organizacionSalida.actividadPrincipal = organizacion.org_main_activity;
        organizacionesSalida.push(organizacionSalida);
    });
    return organizacionesSalida;
}

export const organizacionPostHandler = async (organizacion: OrganizacionModelo): Promise<OrganizacionModelo> => {
    const organizacionEntrada = new OrganizacionEntidad();
    const organizacionSalida = new OrganizacionModelo();

    organizacionEntrada.org_name = organizacion.nombre;
    organizacionEntrada.org_sector = organizacion.sector;
    organizacionEntrada.org_ubication = organizacion.ubicacion;
    organizacionEntrada.org_main_activity = organizacion.actividadPrincipal;

    await new OrganizacionRepositorio().crearOrganizacion(organizacionEntrada);
    organizacionSalida.nombre = organizacionEntrada.org_name;
    organizacionSalida.sector = organizacionEntrada.org_sector;
    organizacionSalida.ubicacion = organizacionEntrada.org_ubication;
    organizacionSalida.actividadPrincipal = organizacionEntrada.org_main_activity;

    return organizacionSalida;
}

export const organizacionPutHandler = async (id: number, organizacion: OrganizacionModelo): Promise<number> => {
    const organizacionEntrada = new OrganizacionEntidad();

    organizacionEntrada.org_name = organizacion.nombre;
    organizacionEntrada.org_sector = organizacion.sector;
    organizacionEntrada.org_ubication = organizacion.ubicacion;
    organizacionEntrada.org_main_activity = organizacion.actividadPrincipal;

    const organizacionActualizada = await new OrganizacionRepositorio().actualizarOrganizacion(id, organizacionEntrada);
    return organizacionActualizada;
}

export const organizacionDeleteHandler = async (id: number): Promise<number> => {
    const organizacionEliminada = await new OrganizacionRepositorio().eliminarOrganizacion(id);
    return organizacionEliminada;
}


