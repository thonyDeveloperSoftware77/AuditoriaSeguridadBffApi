import { ActivoGrupoEntidad } from "../../MODELO/ModeloEntrada/ActivoGrupoEntidad";
import { IActivoGrupoRepositorio } from "../../MODELO/Repositorio/IActivoGrupoRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ActivoGrupoRepositorio implements IActivoGrupoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerActivoGrupo(id: number) {
            const query = `EXEC sps_consulta_todo_asset_groups_organization ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearActivoGrupo(ActivoGrupoEntidad: ActivoGrupoEntidad) {
            const {ast_id_asset, gr_id_groups} = ActivoGrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_asset_user_groups '${ast_id_asset}', '${gr_id_groups}'`;
    
            return await this._grupo.query(query);
        }
    
        async eliminarActivoGrupo(id: number) {
            const query = `EXEC spd_eliminar_asset_user_groups ${id}`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
}