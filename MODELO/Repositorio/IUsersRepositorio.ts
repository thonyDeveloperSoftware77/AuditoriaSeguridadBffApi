import { UsersEntidad } from "../ModeloEntrada/UsersEntidad";

export interface IUserRepositorio {
    obtenerUsers(id: number): Promise<UsersEntidad[]>;
    crearUser(User: UsersEntidad): Promise<UsersEntidad>;
    actualizarUser(id: number, User: UsersEntidad): Promise<number>;
    eliminarUser(id: number): Promise<number>;
}