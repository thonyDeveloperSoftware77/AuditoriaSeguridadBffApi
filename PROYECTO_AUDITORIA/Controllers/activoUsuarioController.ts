import { request, response } from "express";
import { ActivoUsuarioModelo } from "../../MODELO/ModeloSalida/ActivoUsuarioModelo";
import { departamentoUsuarioDeleteHandler, departamentoUsuarioPostHandler} from "../../APLICACION/Handlers/activoUsuarioHandler";

export const postActivoUsuario = async (req = request, res = response) => {
  try {
    const {body} = req
    const organizacionEntrada = new ActivoUsuarioModelo();
    
    organizacionEntrada.usr_id_user = body.idUsuario;
    organizacionEntrada.ast_id_asset = body.idActivo;

    const organizacionSalida: ActivoUsuarioModelo = await departamentoUsuarioPostHandler(organizacionEntrada);
    res.status(200).json(organizacionSalida);
  } catch (error) {
    console.log("error")
    console.log(error)
    res.status(500).json(error);
  }
}

export const deleteActivoUsuario = async (req = request, res = response) => {
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