import { TipoActivoEntidad } from "../../MODELO/ModeloEntrada/TipoActivoEntidad";
import { TipoActivoModelo } from "../../MODELO/ModeloSalida/TipoActivoModelo";
import { TipoActivoRepositorio } from "../../SERVICIO/Repositorio/TipoActivoRepositorio";


export const tipoActivoGetHandler = async (): Promise<TipoActivoModelo[]> => {
    const tipoActivoesSalida: TipoActivoModelo[] = [];
    const tipoActivoes = await new TipoActivoRepositorio().obtenerTipoActivo();
    tipoActivoes.forEach((tipoActivo: TipoActivoEntidad) => {
        const tipoActivoSalida = new TipoActivoModelo();
        tipoActivoSalida.id = tipoActivo.a_type_id_asset_type;
        tipoActivoSalida.nombre = tipoActivo.a_type_name;
        tipoActivoSalida.descripcion = tipoActivo.a_type_description;
        tipoActivoesSalida.push(tipoActivoSalida);
    });
    return tipoActivoesSalida;
}

export const tipoActivoPostHandler = async (tipoActivo: TipoActivoModelo): Promise<TipoActivoModelo> => {
    const tipoActivoEntrada = new TipoActivoEntidad();
    const tipoActivoSalida = new TipoActivoModelo();

    tipoActivoEntrada.a_type_name = tipoActivo.nombre;
    tipoActivoEntrada.a_type_description = tipoActivo.descripcion;

    await new TipoActivoRepositorio().crearTipoActivo(tipoActivoEntrada);
    tipoActivoSalida.nombre = tipoActivoEntrada.a_type_name;
    tipoActivoSalida.descripcion = tipoActivoEntrada.a_type_description;
   
    return tipoActivoSalida;
}

export const tipoActivoPutHandler = async (id: number, tipoActivo: TipoActivoModelo): Promise<number> => {
    const tipoActivoEntrada = new TipoActivoEntidad();

    tipoActivoEntrada.a_type_name = tipoActivo.nombre;
    tipoActivoEntrada.a_type_description = tipoActivo.descripcion;

    const tipoActivoActualizada = await new TipoActivoRepositorio().actualizarTipoActivo(id, tipoActivoEntrada);
    return tipoActivoActualizada;
}

export const tipoActivoDeleteHandler = async (id: number): Promise<number> => {
    const tipoActivoEliminada = await new TipoActivoRepositorio().eliminarTipoActivo(id);
    return tipoActivoEliminada;
}


