import { CriticidadEntidad } from "../../MODELO/ModeloEntrada/CriticidadEntidad";
import { ICriticidadRepositorio } from "../../MODELO/Repositorio/ICriticidadRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class CriticidadRepositorio implements ICriticidadRepositorio {
    
        private _grupo = AppDataSource;
    
        async obtenerCriticidad() {
            const query = `EXEC sps_consulta_todo_criticality`;
            return await this._grupo.query(query);
        }
    
        async crearCriticidad(CriticidadEntidad: CriticidadEntidad) {
            const {cri_criterio,cri_value} = CriticidadEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const value = cri_value; 
            const criterio = cri_criterio;
            const query = `EXEC spi_insertar_criticality '${value}', '${criterio}'`;
    
            return await this._grupo.query(query);
        }
    
        async actualizarCriticidad(id: number, CriticidadEntidad: CriticidadEntidad) {
            const { cri_criterio,cri_value } = CriticidadEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const  valor = cri_value;
            const criterio = cri_criterio;

            const query = `EXEC spu_actualizar_criticality ${id}, '${valor}', '${criterio}'`;
            const result = await this._grupo.query(query);
            return result[0].result
        }
    
        async eliminarCriticidad(id: number) {
            const query = `EXEC spd_eliminar_criticality ${id}`;
            const result = await this._grupo.query(query);
            console.log(result)
            return result[0].result
        }
}