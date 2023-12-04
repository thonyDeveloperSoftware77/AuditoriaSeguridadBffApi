import { EtiquetaEntidad } from "../../MODELO/ModeloEntrada/EtiquetaEntidad";
import { IEtiquetaRepositorio } from "../../MODELO/Repositorio/IEtiquetaRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class EtiquetaRepositorio implements IEtiquetaRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerEtiquetas() {
            const query = `EXEC sps_consulta_todo_labels`;
            return await this._grupo.query(query);
        }
    
        async crearEtiqueta(EtiquetaEntidad: EtiquetaEntidad) {
            const {lbl_name,lbl_description } = EtiquetaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = lbl_name;
            const description = lbl_description;
            const query = `EXEC spi_insertar_labels '${name}', '${description}'`;
    
            return await this._grupo.query(query);
        }
    
        async actualizarEtiqueta(id: number, EtiquetaEntidad: EtiquetaEntidad) {
            const { lbl_name,lbl_description } = EtiquetaEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const  nombre = lbl_name;
            const descripcion = lbl_description;

            const query = `EXEC spu_actualizar_labels ${id}, '${nombre}', '${descripcion}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarEtiqueta(id: number) {
            const query = `EXEC spd_eliminar_labels ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}