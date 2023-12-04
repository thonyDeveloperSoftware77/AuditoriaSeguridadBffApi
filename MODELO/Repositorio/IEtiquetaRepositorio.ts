import { EtiquetaEntidad } from "../ModeloEntrada/EtiquetaEntidad";

export interface IEtiquetaRepositorio {
    obtenerEtiquetas(): Promise<EtiquetaEntidad[]>;
    crearEtiqueta(grupo: EtiquetaEntidad): Promise<EtiquetaEntidad>;
    actualizarEtiqueta(id: number, grupo: EtiquetaEntidad): Promise<number>;
    eliminarEtiqueta(id: number): Promise<number>;
}