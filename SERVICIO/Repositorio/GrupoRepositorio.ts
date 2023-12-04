import { GrupoEntidad } from "../../MODELO/ModeloEntrada/GrupoEntidad";
import { IGrupoRepositorio } from "../../MODELO/Repositorio/IGrupoRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class GrupoRepositorio implements IGrupoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerGrupos(id: number) {
            const query = `EXEC sps_consulta_todo_groups ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearGrupo(GrupoEntidad: GrupoEntidad) {
            const {gr_name, gr_id_organization  } = GrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = gr_name;
            const id_organization = gr_id_organization;
            const query = `EXEC spi_insertar_groups '${name}', '${id_organization}'`;
    
            return await this._grupo.query(query);
        }
    
        async actualizarGrupo(id: number, GrupoEntidad: GrupoEntidad) {
            const {  gr_id_organization, gr_name } = GrupoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const  nombre = gr_name;
            const id_organization = gr_id_organization;
            console.log(id_organization)
            console.log(nombre)
            console.log(id)
            const query = `EXEC spu_actualizar_groups ${id}, '${nombre}', '${id_organization}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarGrupo(id: number) {
            const query = `EXEC spd_eliminar_groups ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}