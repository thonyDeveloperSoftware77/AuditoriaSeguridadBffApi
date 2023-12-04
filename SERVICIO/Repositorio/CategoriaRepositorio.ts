import { CategoriaEntidad } from "../../MODELO/ModeloEntrada/CategoriaEntidad";
import { ICategoriaRepositorio } from "../../MODELO/Repositorio/ICategoriaRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class CategoriaRepositorio implements ICategoriaRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerCategorias() {
            const query = `EXEC sps_consulta_todo_category`;
            return await this._grupo.query(query);
        }
    
        async crearCategoria(CategoriaEntidad: CategoriaEntidad) {
            const {ctg_name,ctg_definition,ctg_examples} = CategoriaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = ctg_name;
            const definition = ctg_definition;
            const examples = ctg_examples;
            const query = `EXEC spi_insertar_category '${name}', '${definition}', '${examples}'`;
    
            return await this._grupo.query(query);
        }
    
        async actualizarCategoria(id: number, CategoriaEntidad: CategoriaEntidad) {
            const { ctg_name,ctg_definition,ctg_examples } = CategoriaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const  nombre = ctg_name;
            const definicion = ctg_definition;
            const ejemplos = ctg_examples;

            const query = `EXEC spu_actualizar_category ${id}, '${nombre}', '${definicion}', '${ejemplos}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarCategoria(id: number) {
            const query = `EXEC spd_eliminar_category ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}