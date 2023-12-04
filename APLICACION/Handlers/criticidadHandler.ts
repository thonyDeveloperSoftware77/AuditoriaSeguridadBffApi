import { CriticidadEntidad } from "../../MODELO/ModeloEntrada/CriticidadEntidad";
import { CriticidadModelo } from "../../MODELO/ModeloSalida/CriticidadModelo";
import { CriticidadRepositorio } from "../../SERVICIO/Repositorio/CriticidadRepositorio";


export const criticidadGetHandler = async (): Promise<CriticidadModelo[]> => {
    const criticidadesSalida: CriticidadModelo[] = [];
    const criticidades = await new CriticidadRepositorio().obtenerCriticidad();
    criticidades.forEach((criticidad: CriticidadEntidad) => {
        const criticidadSalida = new CriticidadModelo();
        criticidadSalida.id = criticidad.cri_id_criticality;
        criticidadSalida.criterio = criticidad.cri_criterio;
        criticidadSalida.valor = criticidad.cri_value;
        criticidadesSalida.push(criticidadSalida);
    });
    return criticidadesSalida;
}

export const criticidadPostHandler = async (criticidad: CriticidadModelo): Promise<CriticidadModelo> => {
    const criticidadEntrada = new CriticidadEntidad();
    const criticidadSalida = new CriticidadModelo();

    criticidadEntrada.cri_criterio = criticidad.criterio;
    criticidadEntrada.cri_value = criticidad.valor;

    await new CriticidadRepositorio().crearCriticidad(criticidadEntrada);
    criticidadSalida.criterio = criticidadEntrada.cri_criterio;
    criticidadSalida.valor = criticidadEntrada.cri_value;
   
    return criticidadSalida;
}

export const criticidadPutHandler = async (id: number, criticidad: CriticidadModelo): Promise<number> => {
    const criticidadEntrada = new CriticidadEntidad();

    criticidadEntrada.cri_criterio = criticidad.criterio;
    criticidadEntrada.cri_value = criticidad.valor;

    const criticidadActualizada = await new CriticidadRepositorio().actualizarCriticidad(id, criticidadEntrada);
    return criticidadActualizada;
}

export const criticidadDeleteHandler = async (id: number): Promise<number> => {
    const criticidadEliminada = await new CriticidadRepositorio().eliminarCriticidad(id);
    return criticidadEliminada;
}


