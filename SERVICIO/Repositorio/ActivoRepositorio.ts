import { ActivoEntidad } from "../../MODELO/ModeloEntrada/ActivoEntidad";
import { IActivoRepositorio } from "../../MODELO/Repositorio/IActivoRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class ActivoRepositorio implements IActivoRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerActivo(id: number) {
            const query = `EXEC sps_consulta_todo_asset ${id}`;
            return await this._grupo.query(query);
        }
    
        async crearActivo(ActivoEntidad: ActivoEntidad) {
            const {ast_code, ast_name, ast_description, ast_ubication, lbl_name, a_type_name,cri_id_criteria, ctg_id_category, clas_id_class, asst_id_organization,ast_review_date  } = ActivoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const query = `EXEC spi_insertar_asset '${ast_code}', '${ast_name}', '${ast_description}', '${ast_ubication}', '${lbl_name}', '${a_type_name}', '${cri_id_criteria}', '${ctg_id_category}', '${clas_id_class}', '${asst_id_organization}', '${ast_review_date}'`;
    
            return await this._grupo.query(query);
        }
    
        async actualizarActivo(id: number, ActivoEntidad: ActivoEntidad) {
            const { ast_code, ast_name, ast_description, ast_ubication, lbl_name, a_type_name,cri_id_criteria, ctg_id_category, clas_id_class, asst_id_organization,ast_review_date } = ActivoEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
    

            const query = `EXEC spu_actualizar_asset ${id}, '${ast_code}', '${ast_name}', '${ast_description}', '${ast_ubication}', '${lbl_name}', '${a_type_name}', '${cri_id_criteria}', '${ctg_id_category}', '${clas_id_class}', '${asst_id_organization}', '${ast_review_date}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarActivo(id: number) {
            const query = `EXEC spd_eliminar_asset ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}