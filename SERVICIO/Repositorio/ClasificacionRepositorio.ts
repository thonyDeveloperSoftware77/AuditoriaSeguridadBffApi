import { ClasificacionEntidad } from "../../MODELO/ModeloEntrada/ClasificacionEntidad";
import { IClasificacionRepositorio } from "../../MODELO/Repositorio/IClasificacionRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ClasificacionRepositorio implements IClasificacionRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerClasificaciones() {
            const query = `EXEC sps_consulta_todo_classifications`;
            return await this._grupo.query(query);
        }
    
        async crearClasificacion(ClasificacionEntidad: ClasificacionEntidad) {
            const {clas_name, clas_definition,clas_example} = ClasificacionEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = clas_name;
            const definition = clas_definition;
            const examples = clas_example;
            const query = `EXEC spi_insertar_classifications '${name}', '${definition}', '${examples}'`;
    
            return await this._grupo.query(query);
        }
    
        async actualizarClasificacion(id: number, ClasificacionEntidad: ClasificacionEntidad) {
            const { clas_name, clas_definition,clas_example } = ClasificacionEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const  nombre = clas_name;
            const definicion = clas_definition;
            const ejemplos = clas_example;

            const query = `EXEC spu_actualizar_classifications ${id}, '${nombre}', '${definicion}', '${ejemplos}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarClasificacion(id: number) {
            const query = `EXEC spd_eliminar_classifications ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}