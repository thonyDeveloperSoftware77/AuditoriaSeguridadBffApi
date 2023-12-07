import { DepartamentoEntidad } from "../../MODELO/ModeloEntrada/DepartamentoEntidad";
import { IDepartamentoRepositorio } from "../../MODELO/Repositorio/IDepartamentoRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class DepartamentoRepositorio implements IDepartamentoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerDepartamento(id: number) {
            const query = `EXEC sps_consulta_todo_business_unit ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearDepartamento(DepartamentoEntidad: DepartamentoEntidad) {
            const {bu_name,bu_description, bu_id_organization} = DepartamentoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = bu_name;
            const description = bu_description;
            const id_organization = bu_id_organization;
            const query = `EXEC spi_insertar_business_unit '${name}', '${description}', '${id_organization}'`;
            console.log("query")  
            return await this._grupo.query(query);
        }
    
        async actualizarDepartamento(id: number, DepartamentoEntidad: DepartamentoEntidad) {
            const {  bu_name,bu_description, bu_id_organization } = DepartamentoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const  nombre = bu_name;
            const descripcion = bu_description;
            const query = `EXEC spu_actualizar_business_unit ${id}, '${nombre}', '${descripcion}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarDepartamento(id: number) {
            const query = `EXEC spd_eliminar_business_unit ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}