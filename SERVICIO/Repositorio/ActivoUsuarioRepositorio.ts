import { ActivoUsuarioEntidad } from "../../MODELO/ModeloEntrada/ActivoUsuarioEntidad";
import { IActivoUsuarioRepositorio } from "../../MODELO/Repositorio/IActivoUsuarioRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ActivoUsuarioRepositorio implements IActivoUsuarioRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerActivoUsuario(id: number) {
            const query = `EXEC sps_consulta_todo_asset_user_organization ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearActivoUsuario(ActivoUsuarioEntidad: ActivoUsuarioEntidad) {
            const {ast_id_asset, usr_id_user} = ActivoUsuarioEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_asset_user_user '${ast_id_asset}', '${usr_id_user}'`;
    
            return await this._grupo.query(query);
        }
    
        async eliminarActivoUsuario(id: number) {
            const query = `EXEC spd_eliminar_asset_user_user ${id}`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
}