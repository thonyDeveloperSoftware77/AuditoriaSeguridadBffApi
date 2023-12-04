import { UsersEntidad } from "../../MODELO/ModeloEntrada/UsersEntidad";
import { UsersModelo } from "../../MODELO/ModeloSalida/UsersModelo";
import { UserRepositorio } from "../../SERVICIO/Repositorio/UsersRepositorio";


export const usuarioGetHandler = async (id: number): Promise<UsersModelo[]> => {
    const usuariosSalida: UsersModelo[] = [];
    const usuarios = await new UserRepositorio().obtenerUsers(id);
    usuarios.forEach((usuario: UsersEntidad) => {
        const usuarioSalida = new UsersModelo();
        usuarioSalida.id = usuario.usr_id_user;
        usuarioSalida.nombre = usuario.usr_name;
        usuarioSalida.apellido = usuario.usr_surname;
        usuarioSalida.email = usuario.usr_email;
        usuarioSalida.idOrganizacion = usuario.usr_id_organization;
        usuarioSalida.password = usuario.usr_password;
        usuarioSalida.idGrupo = usuario.usr_id_group;
        usuariosSalida.push(usuarioSalida);
    });
    return usuariosSalida;
}

export const usuarioPostHandler = async (usuario: UsersModelo): Promise<UsersModelo> => {
    const usuarioEntrada = new UsersEntidad();
    const usuarioSalida = new UsersModelo();

    usuarioEntrada.usr_name = usuario.nombre;
    usuarioEntrada.usr_surname = usuario.apellido;
    usuarioEntrada.usr_email = usuario.email;
    usuarioEntrada.usr_password = usuario.password;
    usuarioEntrada.usr_id_group = usuario.idGrupo;
    usuarioEntrada.usr_id_organization = usuario.idOrganizacion;

    await new UserRepositorio().crearUser(usuarioEntrada);
    usuarioSalida.nombre = usuarioEntrada.usr_name;
    usuarioSalida.apellido = usuarioEntrada.usr_surname;
    usuarioSalida.email = usuarioEntrada.usr_email;
    usuarioSalida.password = usuarioEntrada.usr_password;
    usuarioSalida.idGrupo = usuarioEntrada.usr_id_group;
    usuarioSalida.idOrganizacion = usuarioEntrada.usr_id_organization;
    return usuarioSalida;
}

export const usuarioPutHandler = async (id: number, usuario: UsersModelo): Promise<number> => {
    const usuarioEntrada = new UsersEntidad();

    usuarioEntrada.usr_name = usuario.nombre;
    usuarioEntrada.usr_surname = usuario.apellido;
    usuarioEntrada.usr_email = usuario.email;
    usuarioEntrada.usr_password = usuario.password;
    usuarioEntrada.usr_id_group = usuario.idGrupo;
    usuarioEntrada.usr_id_organization = usuario.idOrganizacion;

    const usuarioActualizada = await new UserRepositorio().actualizarUser(id, usuarioEntrada);
    return usuarioActualizada;
}

export const usuarioDeleteHandler = async (id: number): Promise<number> => {
    const usuarioEliminada = await new UserRepositorio().eliminarUser(id);
    return usuarioEliminada;
}


