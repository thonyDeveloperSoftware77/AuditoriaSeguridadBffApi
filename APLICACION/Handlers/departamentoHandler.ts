import { DepartamentoEntidad } from "../../MODELO/ModeloEntrada/DepartamentoEntidad";
import { DepartamentoGrupoEntidad } from "../../MODELO/ModeloEntrada/DepartamentoGrupoEntidad";
import { DepartamentoUsuarioEntidad } from "../../MODELO/ModeloEntrada/DepartamentoUsuarioEntidad";
import { DepartamentoModelo } from "../../MODELO/ModeloSalida/DepartamentoModelo";
import { GrupoModelo } from "../../MODELO/ModeloSalida/GrupoModelo";
import { DepartamentoGrupoRepositorio } from "../../SERVICIO/Repositorio/DepartamentoGrupoRepositorio";
import { DepartamentoRepositorio } from "../../SERVICIO/Repositorio/DepartamentoRepositorio";
import { DepartamentoUsuarioRepositorio } from "../../SERVICIO/Repositorio/DepartamentoUsuarioRepositorio";


export const departamentoGetHandler = async (id: number): Promise<DepartamentoModelo[]> => {
    const departamentoesSalida: DepartamentoModelo[] = [];
    const departamentos = await new DepartamentoRepositorio().obtenerDepartamento(id);
    const grupos = await new DepartamentoGrupoRepositorio().obtenerDepartamentoGrupo(id);
    const usuarios = await new DepartamentoUsuarioRepositorio().obtenerDepartamentoUsuario(id);
    departamentos.forEach((departamento: DepartamentoEntidad) => {
        const departamentoSalida = new DepartamentoModelo();
        const grupo = grupos.filter((grupo:DepartamentoGrupoEntidad) => grupo.bu_id_business_unit === departamento.bu_id_business_unit);
        const usuario = usuarios.filter((usuario: DepartamentoUsuarioEntidad) => usuario.bu_id_business_unit === departamento.bu_id_business_unit);
        
        departamentoSalida.id = departamento.bu_id_business_unit;
        departamentoSalida.nombre = departamento.bu_name;
        departamentoSalida.descripcion = departamento.bu_description;
        departamentoSalida.idOrganizacion = departamento.bu_id_organization;
        departamentoSalida.grupos = grupo;
        departamentoSalida.usuarios = usuario;
        departamentoesSalida.push(departamentoSalida);
    });

    return departamentoesSalida;
}

export const departamentoPostHandler = async (departamento: DepartamentoModelo): Promise<DepartamentoModelo> => {
    const departamentoEntrada = new DepartamentoEntidad();
    const departamentoSalida = new DepartamentoModelo();

    departamentoEntrada.bu_name = departamento.nombre;
    departamentoEntrada.bu_description = departamento.descripcion;
    departamentoEntrada.bu_id_organization = departamento.idOrganizacion;

    await new DepartamentoRepositorio().crearDepartamento(departamentoEntrada);
    departamentoSalida.nombre = departamentoEntrada.bu_name;
    departamentoSalida.idOrganizacion = departamentoEntrada.bu_id_organization;
    return departamentoSalida;
}

export const departamentoPutHandler = async (id: number, departamento: DepartamentoModelo): Promise<number> => {
    const departamentoEntrada = new DepartamentoEntidad();

    departamentoEntrada.bu_name = departamento.nombre;
    departamentoEntrada.bu_description = departamento.descripcion;
    departamentoEntrada.bu_id_organization = departamento.idOrganizacion;

    const departamentoActualizada = await new DepartamentoRepositorio().actualizarDepartamento(id, departamentoEntrada);
    return departamentoActualizada;
}

export const departamentoDeleteHandler = async (id: number): Promise<number> => {
    const departamentoEliminada = await new DepartamentoRepositorio().eliminarDepartamento(id);
    return departamentoEliminada;
}


