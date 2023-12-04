import { ActivoReviewerGrupoEntidad } from "../../MODELO/ModeloEntrada/ActivoReviewerGrupoEntidad";
import { IActivoReviewerGrupoRepositorio } from "../../MODELO/Repositorio/IActivoReviewerGrupoRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ActivoReviewerGrupoRepositorio implements IActivoReviewerGrupoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerActivoReviewerGrupo(id: number) {
            const query = `EXEC sps_consulta_todo_asset_reviewer_groups_organization ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearActivoReviewerGrupo(ActivoReviewerGrupoEntidad: ActivoReviewerGrupoEntidad) {
            const {ast_id_asset, gr_id_groups} = ActivoReviewerGrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_asset_reviewer_groups '${ast_id_asset}', '${gr_id_groups}'`;
    
            return await this._grupo.query(query);
        }
    
        async eliminarActivoReviewerGrupo(id: number) {
            const query = `EXEC spd_eliminar_asset_reviewer_groups ${id}`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
}