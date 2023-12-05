import { ActivoReviewerUsuarioEntidad } from "../../MODELO/ModeloEntrada/ActivoReviewerUsuarioEntidad";
import { IActivoReviewerUsuarioRepositorio } from "../../MODELO/Repositorio/IActivoReviewerUsuarioRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ActivoReviewerUsuarioRepositorio implements IActivoReviewerUsuarioRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerActivoReviewerUsuario(id: number) {
            const query = `EXEC sps_consulta_todo_asset_reviewer_user_organization ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearActivoReviewerUsuario(ActivoReviewerUsuarioEntidad: ActivoReviewerUsuarioEntidad) {
            const {ast_id_asset, usr_id_user} = ActivoReviewerUsuarioEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_asset_reviewer_user '${ast_id_asset}', '${usr_id_user}'`;
    
            return await this._grupo.query(query);
        }
    
        async eliminarActivoReviewerUsuario(id: number) {
            const query = `EXEC spd_eliminar_asset_user_user ${id}`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
}