import { ActivoBusinessUnitEntidad } from "../../MODELO/ModeloEntrada/ActivoBusinessUnitEntidad";
import { ActivoBusinessUnitModelo } from "../../MODELO/ModeloSalida/ActivoBusinessUnitModelo";
import { ActivoBusinessUnitRepositorio } from "../../SERVICIO/Repositorio/ActivoBusinessUnitRepositorio";


export const departamentoUsuarioPostHandler = async (departamentoUsuario: ActivoBusinessUnitModelo): Promise<ActivoBusinessUnitModelo> => {
    const departamentoUsuarioEntrada = new ActivoBusinessUnitEntidad();
    const departamentoUsuarioSalida = new ActivoBusinessUnitModelo();

    departamentoUsuarioEntrada.ast_id_asset = departamentoUsuario.ast_id_asset;
    departamentoUsuarioEntrada.bu_id_business_unit = departamentoUsuario.bu_id_business_unit;
    departamentoUsuarioSalida.bu_name = departamentoUsuario.bu_name;

    await new ActivoBusinessUnitRepositorio().crearActivoBusinessUnit(departamentoUsuarioEntrada);
    departamentoUsuarioSalida.ast_id_asset = departamentoUsuarioEntrada.ast_id_asset;
    departamentoUsuarioSalida.bu_id_business_unit = departamentoUsuarioEntrada.bu_id_business_unit;
    departamentoUsuarioSalida.abu_id = departamentoUsuarioEntrada.abu_id;
    return departamentoUsuarioSalida;
}

export const departamentoUsuarioDeleteHandler = async (id: number): Promise<number> => {
    const departamentoUsuarioEliminada = await new ActivoBusinessUnitRepositorio().eliminarActivoBusinessUnit(id);
    return departamentoUsuarioEliminada;
}


