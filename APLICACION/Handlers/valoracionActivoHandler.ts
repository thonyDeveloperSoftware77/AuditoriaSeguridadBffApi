import { ValoracionActivoEntidad } from "../../MODELO/ModeloEntrada/ValoracionActivoEntidad";
import { ValoracionActivoModelo } from "../../MODELO/ModeloSalida/ValoracionActivoModelo";
import { ValoracionActivosRepositorio } from "../../SERVICIO/Repositorio/ValoracionActivosRepositorio";


export const valoracionActivoGetHandler = async (id: number): Promise<ValoracionActivoModelo[]> => {
    const valoracionActivoesSalida: ValoracionActivoModelo[] = [];
    const valoracionActivoes = await new ValoracionActivosRepositorio().obtenerValoracionActivos(id);
    valoracionActivoes.forEach((valoracionActivo: ValoracionActivoEntidad) => {
        const valoracionActivoSalida = new ValoracionActivoModelo();
        valoracionActivoSalida.id = valoracionActivo.id_valoracion;
        valoracionActivoSalida.id_asset = valoracionActivo.id_asset;
        valoracionActivoSalida.confidencialidad = valoracionActivo.confidencialidad;
        valoracionActivoSalida.integridad = valoracionActivo.integridad;
        valoracionActivoSalida.disponibilidad = valoracionActivo.disponibilidad;
        valoracionActivoSalida.codigo = valoracionActivo.codigo;
        valoracionActivoSalida.nombre = valoracionActivo.nombre;
        valoracionActivoSalida.descripcion = valoracionActivo.descripcion;
        valoracionActivoSalida.ubicacion = valoracionActivo.ubicacion;
        valoracionActivoSalida.idOrganizacion = valoracionActivo.idOrganizacion;
        valoracionActivoesSalida.push(valoracionActivoSalida);
    });
    return valoracionActivoesSalida;
}

export const valoracionActivoPostHandler = async (valoracionActivo: ValoracionActivoModelo): Promise<ValoracionActivoModelo> => {
    const valoracionActivoEntrada = new ValoracionActivoEntidad();
    const valoracionActivoSalida = new ValoracionActivoModelo();

    valoracionActivoEntrada.id_asset = valoracionActivo.id_asset;
    valoracionActivoEntrada.confidencialidad = valoracionActivo.confidencialidad;
    valoracionActivoEntrada.integridad = valoracionActivo.integridad;
    valoracionActivoEntrada.disponibilidad = valoracionActivo.disponibilidad;

    await new ValoracionActivosRepositorio().crearValoracionActivo(valoracionActivoEntrada);
    valoracionActivoSalida.id_asset = valoracionActivoEntrada.id_asset;
    valoracionActivoSalida.confidencialidad = valoracionActivoEntrada.confidencialidad;
    valoracionActivoSalida.integridad = valoracionActivoEntrada.integridad;
    valoracionActivoSalida.disponibilidad = valoracionActivoEntrada.disponibilidad;
    return valoracionActivoSalida;
}

export const valoracionActivoPutHandler = async (id: number, valoracionActivo: ValoracionActivoModelo): Promise<number> => {
    const valoracionActivoEntrada = new ValoracionActivoEntidad();

    valoracionActivoEntrada.id_asset = valoracionActivo.id_asset;
    valoracionActivoEntrada.confidencialidad = valoracionActivo.confidencialidad;
    valoracionActivoEntrada.integridad = valoracionActivo.integridad;
    valoracionActivoEntrada.disponibilidad = valoracionActivo.disponibilidad;

    const valoracionActivoActualizada = await new ValoracionActivosRepositorio().actualizarValoracionActivo(id, valoracionActivoEntrada);
    return valoracionActivoActualizada;
}

export const valoracionActivoDeleteHandler = async (id: number): Promise<number> => {
    const valoracionActivoEliminada = await new ValoracionActivosRepositorio().eliminarValoracionActivo(id);
    return valoracionActivoEliminada;
}


