import { DepartamentoGrupoEntidad } from "../../MODELO/ModeloEntrada/DepartamentoGrupoEntidad";
import { DepartamentoGrupoModelo } from "../../MODELO/ModeloSalida/DepartamentoGrupoModelo";
import { DepartamentoGrupoRepositorio } from "../../SERVICIO/Repositorio/DepartamentoGrupoRepositorio";


export const departamentoGrupoPostHandler = async (departamento: DepartamentoGrupoModelo): Promise<DepartamentoGrupoModelo> => {
    const departamentoEntrada = new DepartamentoGrupoEntidad();
    const departamentoSalida = new DepartamentoGrupoModelo();

    departamentoEntrada.bu_id_business_unit = departamento.idDepartamento;
    departamentoEntrada.gr_id_groups = departamento.id;

    await new DepartamentoGrupoRepositorio().crearDepartamentoGrupo(departamentoEntrada);
    departamentoSalida.idDepartamento = departamentoEntrada.bu_id_business_unit;
    departamentoSalida.id = departamentoEntrada.gr_id_groups;
    return departamentoSalida;
}

export const departamentoGrupoDeleteHandler = async (id: number): Promise<number> => {
    const departamentoEliminada = await new DepartamentoGrupoRepositorio().eliminarDepartamentoGrupo(id);
    return departamentoEliminada;
}


