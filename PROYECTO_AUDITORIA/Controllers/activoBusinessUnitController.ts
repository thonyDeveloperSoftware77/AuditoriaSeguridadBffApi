import { request, response } from "express";
import { ActivoBusinessUnitModelo } from "../../MODELO/ModeloSalida/ActivoBusinessUnitModelo";
import { departamentoUsuarioDeleteHandler, departamentoUsuarioPostHandler} from "../../APLICACION/Handlers/activoBusinessUnitHandler";

export const postActivoBusinessUnit = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new ActivoBusinessUnitModelo();
    
    organizacionEntrada.bu_id_business_unit = body.idBusinessUnit;
    organizacionEntrada.ast_id_asset = body.idActivo;

    const organizacionSalida: ActivoBusinessUnitModelo = await departamentoUsuarioPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteActivoBusinessUnit = async (req = request, res = response) => {
  try {
    const {body} = req

    const organizacionSalida: number = await departamentoUsuarioDeleteHandler(body.id);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}