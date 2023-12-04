import { OrganizacionEntidad } from "../ModeloEntrada/OrganizacionEntidad";

export interface IOrganizacionRepositorio {
    obtenerOrganizaciones(): Promise<OrganizacionEntidad[]>;
    crearOrganizacion(organizacion: OrganizacionEntidad): Promise<OrganizacionEntidad>;
    actualizarOrganizacion(id: number, organizacion: OrganizacionEntidad): Promise<number>;
    eliminarOrganizacion(id: number): Promise<number>;
}