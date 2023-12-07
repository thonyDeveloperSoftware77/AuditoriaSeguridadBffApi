import { DepartamentoUsuarioEntidad } from "../../MODELO/ModeloEntrada/DepartamentoUsuarioEntidad";
import { IDepartamentoUsuarioRepositorio } from "../../MODELO/Repositorio/IDepartamentoUsuarioRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class DepartamentoUsuarioRepositorio implements IDepartamentoUsuarioRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerDepartamentoUsuario(id: number) {
            const query = `EXEC sps_consulta_todo_business_unit_organization ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearDepartamentoUsuario(DepartamentoUsuarioEntidad: DepartamentoUsuarioEntidad) {
            const {bu_id_business_unit, usr_id_user} = DepartamentoUsuarioEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const id_business_unit = bu_id_business_unit;
            const id_user = usr_id_user;
            const query = `EXEC spi_insertar_bussines_unit_users '${id_user}', '${id_business_unit}'`;
    
            return await this._grupo.query(query);
        }
    
        async eliminarDepartamentoUsuario(id: number) {
            console.log(id)
            const query = `EXEC spd_eliminar_business_unit_users ${id}`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
}