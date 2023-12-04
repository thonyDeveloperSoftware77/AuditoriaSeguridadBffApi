import { ClasificacionEntidad } from "../../MODELO/ModeloEntrada/ClasificacionEntidad";
import { ClasificacionModelo } from "../../MODELO/ModeloSalida/ClasificacionModelo";
import { ClasificacionRepositorio } from "../../SERVICIO/Repositorio/ClasificacionRepositorio";


export const clasificacionGetHandler = async (): Promise<ClasificacionModelo[]> => {
    const clasificacionesSalida: ClasificacionModelo[] = [];
    const clasificaciones = await new ClasificacionRepositorio().obtenerClasificaciones();
    clasificaciones.forEach((clasificacion: ClasificacionEntidad) => {
        const clasificacionSalida = new ClasificacionModelo();
        clasificacionSalida.id = clasificacion.clas_id_classification;
        clasificacionSalida.nombre = clasificacion.clas_name;
        clasificacionSalida.definicion = clasificacion.clas_definition;
        clasificacionSalida.ejemplo = clasificacion.clas_example;
        clasificacionesSalida.push(clasificacionSalida);
    });
    return clasificacionesSalida;
}

export const clasificacionPostHandler = async (clasificacion: ClasificacionModelo): Promise<ClasificacionModelo> => {
    const clasificacionEntrada = new ClasificacionEntidad();
    const clasificacionSalida = new ClasificacionModelo();

    clasificacionEntrada.clas_name = clasificacion.nombre;
    clasificacionEntrada.clas_definition = clasificacion.definicion;
    clasificacionEntrada.clas_example = clasificacion.ejemplo;

    await new ClasificacionRepositorio().crearClasificacion(clasificacionEntrada);
    clasificacionSalida.nombre = clasificacionEntrada.clas_name;
    clasificacionSalida.definicion = clasificacionEntrada.clas_definition;
    clasificacionSalida.ejemplo = clasificacionEntrada.clas_example;
   
    return clasificacionSalida;
}

export const clasificacionPutHandler = async (id: number, clasificacion: ClasificacionModelo): Promise<number> => {
    const clasificacionEntrada = new ClasificacionEntidad();

    clasificacionEntrada.clas_name = clasificacion.nombre;
    clasificacionEntrada.clas_definition = clasificacion.definicion;
    clasificacionEntrada.clas_example = clasificacion.ejemplo;

    const clasificacionActualizada = await new ClasificacionRepositorio().actualizarClasificacion(id, clasificacionEntrada);
    return clasificacionActualizada;
}

export const clasificacionDeleteHandler = async (id: number): Promise<number> => {
    const clasificacionEliminada = await new ClasificacionRepositorio().eliminarClasificacion(id);
    return clasificacionEliminada;
}


