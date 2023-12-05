import { TipoActivoEntidad } from "../../MODELO/ModeloEntrada/TipoActivoEntidad";
import { ITipoActivoRepositorio } from "../../MODELO/Repositorio/ITipoActivo";
import AppDataSource from "../Contexto/dbConectionOptions";



export class TipoActivoRepositorio implements ITipoActivoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerTipoActivo() {
            const query = `EXEC sps_consulta_todo_asset_type`;
            return await this._grupo.query(query);
        }
    
        async crearTipoActivo(TipoActivoEntidad: TipoActivoEntidad) {
            const {a_type_name, a_type_description} = TipoActivoEntidad;
            const query = `EXEC spi_insertar_asset_type '${a_type_name}', '${a_type_description}'`;
    
            return await this._grupo.query(query);
        }
    
        async actualizarTipoActivo(id: number, TipoActivoEntidad: TipoActivoEntidad) {
            const { a_type_name, a_type_description } = TipoActivoEntidad;
            const query = `EXEC spu_actualizar_asset_type ${id}, '${a_type_name}', '${a_type_description}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarTipoActivo(id: number) {
            const query = `EXEC spd_eliminar_asset_type ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}