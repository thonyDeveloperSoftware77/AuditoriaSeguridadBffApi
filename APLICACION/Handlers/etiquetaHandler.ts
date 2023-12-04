import { EtiquetaEntidad } from "../../MODELO/ModeloEntrada/EtiquetaEntidad";
import { EtiquetaModelo } from "../../MODELO/ModeloSalida/EtiquetaModelo";
import { EtiquetaRepositorio } from "../../SERVICIO/Repositorio/EtiquetaRepositorio";


export const etiquetaGetHandler = async (): Promise<EtiquetaModelo[]> => {
    const etiquetaesSalida: EtiquetaModelo[] = [];
    const etiquetaes = await new EtiquetaRepositorio().obtenerEtiquetas();
    etiquetaes.forEach((etiqueta: EtiquetaEntidad) => {
        const etiquetaSalida = new EtiquetaModelo();
        etiquetaSalida.id = etiqueta.lbl_id_labels;
        etiquetaSalida.nombre = etiqueta.lbl_name;
        etiquetaSalida.descripcion = etiqueta.lbl_description;
        etiquetaesSalida.push(etiquetaSalida);
    });
    return etiquetaesSalida;
}

export const etiquetaPostHandler = async (etiqueta: EtiquetaModelo): Promise<EtiquetaModelo> => {
    const etiquetaEntrada = new EtiquetaEntidad();
    const etiquetaSalida = new EtiquetaModelo();

    etiquetaEntrada.lbl_name = etiqueta.nombre;
    etiquetaEntrada.lbl_description = etiqueta.descripcion;

    await new EtiquetaRepositorio().crearEtiqueta(etiquetaEntrada);
    etiquetaSalida.nombre = etiquetaEntrada.lbl_name;
    etiquetaSalida.descripcion = etiquetaEntrada.lbl_description;
   
    return etiquetaSalida;
}

export const etiquetaPutHandler = async (id: number, etiqueta: EtiquetaModelo): Promise<number> => {
    const etiquetaEntrada = new EtiquetaEntidad();

    etiquetaEntrada.lbl_name = etiqueta.nombre;
    etiquetaEntrada.lbl_description = etiqueta.descripcion;

    const etiquetaActualizada = await new EtiquetaRepositorio().actualizarEtiqueta(id, etiquetaEntrada);
    return etiquetaActualizada;
}

export const etiquetaDeleteHandler = async (id: number): Promise<number> => {
    const etiquetaEliminada = await new EtiquetaRepositorio().eliminarEtiqueta(id);
    return etiquetaEliminada;
}


