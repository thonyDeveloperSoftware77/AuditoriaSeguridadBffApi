import { DepartamentoUsuarioEntidad } from "../../MODELO/ModeloEntrada/DepartamentoUsuarioEntidad";
import { DepartamentoUsuarioModelo } from "../../MODELO/ModeloSalida/DepartamentoUsuarioModelo";
import { DepartamentoUsuarioRepositorio } from "../../SERVICIO/Repositorio/DepartamentoUsuarioRepositorio";


export const departamentoUsuarioPostHandler = async (departamentoUsuario: DepartamentoUsuarioModelo): Promise<DepartamentoUsuarioModelo> => {
    const departamentoUsuarioEntrada = new DepartamentoUsuarioEntidad();
    const departamentoUsuarioSalida = new DepartamentoUsuarioModelo();

    departamentoUsuarioEntrada.bu_id_business_unit = departamentoUsuario.idDepartamento;
    departamentoUsuarioEntrada.usr_id_user = departamentoUsuario.id;

    await new DepartamentoUsuarioRepositorio().crearDepartamentoUsuario(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.idDepartamento = departamentoUsuarioEntrada.bu_id_business_unit;
    departamentoUsuarioSalida.id = departamentoUsuarioEntrada.usr_id_user;
    return departamentoUsuarioSalida;
}

export const departamentoUsuarioDeleteHandler = async (id: number): Promise<number> => {
    const departamentoUsuarioEliminada = await new DepartamentoUsuarioRepositorio().eliminarDepartamentoUsuario(id);
    return departamentoUsuarioEliminada;
}


