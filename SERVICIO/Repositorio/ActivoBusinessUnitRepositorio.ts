import { ActivoBusinessUnitEntidad } from "../../MODELO/ModeloEntrada/ActivoBusinessUnitEntidad";
import { IActivoBusinessUnitRepositorio } from "../../MODELO/Repositorio/IActivoBusinessUnitRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ActivoBusinessUnitRepositorio implements IActivoBusinessUnitRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerActivoBusinessUnit(id: number) {
            const query = `EXEC sps_consulta_todo_asset_business_unit ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearActivoBusinessUnit(ActivoBusinessUnitEntidad: ActivoBusinessUnitEntidad) {
            const {ast_id_asset, bu_id_business_unit} = ActivoBusinessUnitEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_asset_business_unit '${ast_id_asset}', '${bu_id_business_unit}'`;
    
            return await this._grupo.query(query);
        }
    
        async eliminarActivoBusinessUnit(id: number) {
            const query = `EXEC spd_eliminar_asset_business_unit ${id}`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
}