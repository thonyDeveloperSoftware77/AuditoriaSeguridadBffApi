import { DepartamentoGrupoEntidad } from "../../MODELO/ModeloEntrada/DepartamentoGrupoEntidad";
import { IDepartamentoGrupoRepositorio } from "../../MODELO/Repositorio/IDepartamentoGrupoRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class DepartamentoGrupoRepositorio implements IDepartamentoGrupoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerDepartamentoGrupo(id: number) {
            const query = `EXEC sps_consulta_todo_business_unit_groups_organization ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearDepartamentoGrupo(DepartamentoGrupoEntidad: DepartamentoGrupoEntidad) {
            const {bu_id_business_unit,gr_id_groups} = DepartamentoGrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_bussines_unit_groups '${gr_id_groups}', '${bu_id_business_unit}'`;
            return await this._grupo.query(query);
        }
    
        async eliminarDepartamentoGrupo(id: number) {
            const query = `EXEC spd_eliminar_business_unit_groups ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}