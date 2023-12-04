import { OrganizacionEntidad } from "../../MODELO/ModeloEntrada/OrganizacionEntidad";
import { IOrganizacionRepositorio } from "../../MODELO/Repositorio/IOrganizacionRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";

export class OrganizacionRepositorio implements IOrganizacionRepositorio {

    private _organizacion = AppDataSource;

    async obtenerOrganizaciones() {
        const query = "EXEC sps_consulta_todo_organization";
        return await this._organizacion.query(query);
    }

    async crearOrganizacion(OrganizacionEntidad: OrganizacionEntidad) {
        const { org_name, org_sector, org_ubication, org_main_activity } = OrganizacionEntidad;
        //transformar los nombres de las variables a los nombres de la base de datos
        const name = org_name;
        const sector = org_sector;
        const ubication = org_ubication;
        const main_activity = org_main_activity;
        const query = `EXEC spi_insertar_organization '${name}', '${sector}', '${ubication}', '${main_activity}'`;

        return await this._organizacion.query(query);
    }

    async actualizarOrganizacion(id: number, OrganizacionEntidad: OrganizacionEntidad) {
        const { org_name, org_sector, org_ubication, org_main_activity } = OrganizacionEntidad;
        //transformar los nombres de las variables a los nombres de la base de datos
        const name = org_name;
        const sector = org_sector;
        const ubication = org_ubication;
        const main_activity = org_main_activity;

        const query = `EXEC spu_actualizar_organization ${id}, '${name}', '${sector}', '${ubication}', '${main_activity}'`;
        
        const result = await this._organizacion.query(query);
        return result[0].result
    }

    async eliminarOrganizacion(id: number) {
        const query = `EXEC spd_eliminar_organization ${id}`;
        const result = await this._organizacion.query(query);
        console.log(result)
        return result[0].result
    }
}
