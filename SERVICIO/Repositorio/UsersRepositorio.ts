import { UsersEntidad } from "../../MODELO/ModeloEntrada/UsersEntidad";
import { IUserRepositorio} from "../../MODELO/Repositorio/IUsersRepositorio";
import AppDataSource from "../Contexto/dbConectionOptions";



export class UserRepositorio implements IUserRepositorio {
    
        private _user = AppDataSource;
    
        async obtenerUsers(id: number) {
            const query = `EXEC sps_consulta_todo_users ${id}`;
            return await this._user.query(query);
        }
    
        async crearUser(UsersEntidad: UsersEntidad) {
            const {usr_email,usr_id_group,usr_id_organization, usr_name,usr_password,usr_surname  } = UsersEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const name = usr_name;
            const surname = usr_surname;
            const email = usr_email;
            const password = usr_password;
            const id_organization = usr_id_organization;
            const id_group = usr_id_group;

            const query = `EXEC spi_insertar_users '${name}',  '${surname}', '${email}', '${id_organization}', '${password}', '${id_group}'`;
    
            return await this._user.query(query);
        }
    
        async actualizarUser(id: number, UsersEntidad: UsersEntidad) {
            const { usr_email,usr_id_group,usr_id_organization,usr_id_user,usr_name,usr_password,usr_surname } = UsersEntidad;
            //transformar los nombres de las variables a los nombres de la base de datos
            const nombre = usr_name;
            const apellido = usr_surname;
            const correo = usr_email;
            const password = usr_password;
            const id_organization = usr_id_organization;
            const id_group = usr_id_group;

            const query = `EXEC spu_actualizar_users ${id}, '${nombre}', '${apellido}', '${correo}', '${id_organization}', '${password}', '${id_group}'`;
            const result = await this._user.query(query);
            return result[0].result
        }
    
        async eliminarUser(id: number) {
            const query = `EXEC spd_eliminar_users ${id}`;
            const result = await this._user.query(query);
            console.log(result)
            return result[0].result
        }
}