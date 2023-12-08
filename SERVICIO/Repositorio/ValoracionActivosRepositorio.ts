import { ValoracionActivoEntidad } from "../../MODELO/ModeloEntrada/ValoracionActivoEntidad";
import { IValoracionActivoRepositorio } from "../../MODELO/Repositorio/IValoracionActivoRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ValoracionActivosRepositorio implements IValoracionActivoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerValoracionActivos(id: number) {
            const query = `EXEC sps_consulta_todo_valoracion ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearValoracionActivo(ValoracionActivosEntidad: ValoracionActivoEntidad) {
            const {id_asset, confidencialidad, integridad, disponibilidad} = ValoracionActivosEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_valoracion '${id_asset}', '${confidencialidad}', '${integridad}', '${disponibilidad}'`;
            return await this._grupo.query(query);
        }

        async actualizarValoracionActivo(id: number, ValoracionActivoEntidad: ValoracionActivoEntidad) {
            const { id_asset, confidencialidad, integridad, disponibilidad } = ValoracionActivoEntidad;
          
            const query = `EXEC spu_actualizar_valoracion ${id}, '${id_asset}', '${confidencialidad}', '${integridad}', '${disponibilidad}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
    
        async eliminarValoracionActivo(id: number) {
            const query = `EXEC spd_eliminar_valoracion ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}