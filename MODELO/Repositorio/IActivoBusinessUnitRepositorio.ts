import { ActivoBusinessUnitEntidad } from "../ModeloEntrada/ActivoBusinessUnitEntidad";

export interface IActivoBusinessUnitRepositorio {
    obtenerActivoBusinessUnit(id: number): Promise<ActivoBusinessUnitEntidad[]>;
    crearActivoBusinessUnit(grupo: ActivoBusinessUnitEntidad): Promise<ActivoBusinessUnitEntidad>;
    eliminarActivoBusinessUnit(id: number): Promise<number>;
}